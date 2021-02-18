import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

// инлайн стилизация
const style = {
    ul: {
        listStyle: "none",
        padding: 0,
        margin: 0,
    }
}

function TodoList(props) {
    return <ul style={style.ul}>
        {props.todos.map((todo, index) => {
            return <TodoItem todo={todo} key={todo.id} index={index.toString()} />
        })}
    </ul>
}

// Валидация типов параметров от получаемого обьекта "props"
TodoList.propTypes = {
    // todos: PropTypes.array // получаемый тип обьекта
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
    // Массив состоянийщий из(arrayOf)обьектов
    // флаг isRequired - указывает что необходим для работы компонента
}

export default TodoList;