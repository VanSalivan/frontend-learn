import React from 'react';
import TodoItem from './TodoItem'

// инлайн стилизация
const style = {
    ul: {
        listStyle: "none",
        padding: 0,
        margin: 0,
    }
}

export default function TodoList(props) {
    return <ul style={style.ul}>
        {props.todos.map((todo, index) => {
            return <TodoItem todo={todo} key={todo.id} index={index} />
        })}
    </ul>
}