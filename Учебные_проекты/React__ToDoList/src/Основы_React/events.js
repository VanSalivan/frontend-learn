/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';

import './todo-list-item.css';

// =========================================================
// ? Регистрация Обработчика событий / EventListener

// =========================================================
// ? Этап / Вариант №1
//* 1) Добавляем обработчик в JSX onClick={() => { тело функции } в атрибут элемента

export default class TodoListItem extends React.Component {
    render() {
        return (
            <span className="todo-list-item">
                <span
                    className="todo-list-item-label"
                    onClick={() => console.log(this.props)} //! 1)
                >
                    {label}
                </span>
            </span>
        );
    }
}

// =========================================================
// ? Этап / Вариант №2
//* 2) Создаем отдельную функцию для события нажатия на прототипе класса "Componen"
//* 3) Функции стрелки сохраняют лексический this, сейчас this будет undefined
//* 4) Байндим/привязываем this к правильному this
//* Но, так каждый раз функция "render" будет создавать новую функцию "onLabelClick"

export default class TodoListItem extends React.Component {
    onLabelClick() { //* 2)
        console.log(this.props); //* 3)
    }

    render() {
        return (
            <span className="todo-list-item">
                <span
                    className="todo-list-item-label"
                    style={style}
                    onClick={this.onLabelClick.bind(this)} //* 4)
                >
                    {label}
                </span>
            </span>
        );
    }
}

// =========================================================
// ? Этап / Вариант №3
// * 5) Используем конструктор и суперконструктор для создания функции в классе "TodoListItem"

export default class TodoListItem extends React.Component {
    constructor() { //* Вызываем конструктор класса "TodoListItem"
        super();    //* Вызов суперКонструктора прототипа "Componen" прежде использования this
        this.onLabelClick = () => { // * 5) 
            console.log(this.props);
        };
    }

    render() {
        return (
            <span className="todo-list-item">
                <span
                    className="todo-list-item-label"
                    style={style}
                    onClick={this.onLabelClick.bind(this)} //* 4)
                >
                    {label}
                </span>
            </span>
        );
    }
}

// =========================================================
// ? Этап / Вариант №4
// * 6) Используем поля классов - class field
// * На самом обьекте, не на прототипе создается функция стрелка сохраняя this

export default class TodoListItem extends React.Component {
    onLabelClick = () => { // * 6)
        console.log(this.props);
    };

    render() {
        return (
            <span className="todo-list-item">
                <span
                    className="todo-list-item-label"
                    style={style}
                    onClick={this.onLabelClick.bind(this)} //* 4)
                >
                    {label}
                </span>
            </span>
        );
    }
}
