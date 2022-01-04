import React, { useState, useEffect } from 'react';
import Context from '../../context';
import AddTodo from '../addTodo/addTodo';
import Loader from '../loader/loader';
import TodoList from '../TodoList/TodoList';

import './App.scss';

function App() {

    const [arrayTodo, setArrayTodo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(jsonArrayTodo => {
                setTimeout(() => {
                    setArrayTodo(jsonArrayTodo)
                    setLoading(false)
                }, 5000)
            })
    }, []);



    function toggleItemCheck(id) {
        setArrayTodo((arrayTodo.map(el => {
            if (el.id === id) {
                el.completed = !el.completed;
            }
            return el;
        })
        ))
    }

    function removeTodo(id) {
        setArrayTodo(arrayTodo.filter(item => item.id !== id))
    }

    function addTodoItem(title) {
        setArrayTodo(arrayTodo.concat([{
            title: title,
            completed: false,
            id: Date.now()
        }]))
    }

    return (
        <Context.Provider value={{
            removeTodo: removeTodo,
            example: "В контекст можно передать объект с различными полями"
        }}>
            <div className="wrapper">
                <h1>React tutorial</h1>

                {arrayTodo.length ?
                    <TodoList propsArray={arrayTodo} onToggle={toggleItemCheck} />
                    : loading ? null : <p>Нет задач</p>
                }

                <AddTodo onCreate={addTodoItem} />
                {loading && <Loader />}

            </div>
        </Context.Provider>
    );
}

export default App;
