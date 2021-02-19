import React from 'react';
import TodoItem from './TodoItem';
import PropTypes, { element } from 'prop-types';

// инлайн стилизация
const style = {
    ul: {
        listStyle: "none",
        padding: 0,
        margin: 0,
    }
}

function TodoList({ todos, toogleOn, onDeleted }) {

    const element = todos.map((item, index) => {
        const { id, ...itemData } = item;

        return (
            <TodoItem key={id}
                index={index}
                todo={itemData}
                toogleOn={toogleOn}
                onDeleted={() => onDeleted(id)}
            />
        )
    })

    return (
        <ul style={style.ul}>
            {element}
        </ul>
    )
}

// Валидация типов параметров от получаемого обьекта "props"
TodoList.propTypes = {
    // todos: PropTypes.array // получаемый тип обьекта
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    // arrayOf - Массив состоянийщий из(обьектов)
    // флаг isRequired - указывает что необходим для работы компонента
    toogleOn: PropTypes.func.isRequired
}

export default TodoList;