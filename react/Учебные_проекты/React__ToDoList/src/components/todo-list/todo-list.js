/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

// eslint-disable-next-line object-curly-newline
const TodoList = ({ todos, onDeleted, onToogleDone, onToogleImportant }) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToogleImportant={() => onToogleImportant(id)}
                    onToogleDone={() => onToogleDone(id)}
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements}
        </ul>
    );
};

export default TodoList;
