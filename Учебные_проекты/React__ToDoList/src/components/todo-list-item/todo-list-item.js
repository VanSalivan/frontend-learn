/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {
    render() {
        // eslint-disable-next-line object-curly-newline
        const { done, important, label, onDeleted, onToogleImportant, onToogleDone } = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span className="todo-list-item-label" onClick={onToogleDone}>{label}</span>

                <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onToogleImportant}>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}
