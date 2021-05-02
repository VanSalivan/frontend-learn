import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context';

import './TodoItem.scss'

function TodoItem({ todo, index, onToggle }) {

    const { removeTodo } = useContext(Context);

    const classes = ["todo-list-item__title"];
    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li className="todo-list__item todo-list-item">
            <span className={classes.join(" ")}>
                <input checked={todo.completed}
                    className="todo-list-item__checkbox" type="checkbox"
                    onChange={() => onToggle(todo.id)}
                />
                <strong className="todo-list-item__number">{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>

            {/* <button className="todo-list-item__button" onClick={() => removeTodo(todo.id)}>x</button> */}
            <button className="todo-list-item__button" onClick={removeTodo.bind(null, todo.id)}>x</button>
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onToggle: PropTypes.func.isRequired,
};

export default TodoItem;