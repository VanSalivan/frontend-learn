//! state
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import './todo-list-item.css';

// ? state - Поле хранящее внутренее состояние компонента
//* 1) Состояние хранится в поле "state"
//* 2) this.state иницализируется в конструкторе или в теле класса
//* 3) После инициализации "state" нельзя изменять (только читать)
//* 4) Чтобы обновить state используется setState()

// ? Этапы обработки
//* 1) Кликаем на элемент => срабатывает функция "onLabelClick" с функцией "setState"
//* 2) "setState" сообщает Реакту что состояние изменилось и его нужно перерендерить
//* 3) Реакт заного вызывает функцию "render"
//* 4) Функция "render" возвращает новую структуру для нашего компонента
//* 5) Реакт заного запускает свой реконселейшн алгорит для поиска элемента с измененым состоянием
//* 6) Реакт обновляет только этот маленький параметр в DOM дереве

export default class TodoListItem extends React.Component {
    constructor() {
        super();
        this.state = { //* 2)
            done: false, //* состояние выполнености задачи
        };
        this.onLabelClick = () => { //* При клике состояние изменяется на true
            this.setState({ //* 4)
                done: true, //* состояние выполнености задачи
            });
        };
    }
    render() {
        const { done } = this.state; //* деструктуризация поля this.state.done в переменную
        const { label, important = false } = this.props;
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        };

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    style={style}
                    onClick={this.onLabelClick}
                >
                    {label}
                </span>
        );
    }
}
