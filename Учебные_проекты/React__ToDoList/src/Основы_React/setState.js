/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

// ? setState
// =========================================================
//* 0)setState - работает асинхронно
//* 1) Если новое состояние никак не зависит от предыдущего то можно использовать setState и передавать внутрь обьект

export default class TodoListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            done: false,
            important: false,
        };
        this.onLabelClick = () => {
            this.setState({ //* 1)
                done: true,
            });
        };
        this.setMarkImportant = () => {
            this.setState({ //* 1)
                important: true,
            });
        };
    }
}

// =========================================================
//* 2) Если новое состояние значение стейта зависит от предыдущего состояние обязательно нужно передавать функции setState()
//* Другую функцию setState((параметры новой функции) => ({ тело новой функции }))
//* Функция выполняется только когда state будет в финальном состоянии и затем изменит его

export default class TodoListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            done: false,
            important: false,
        };
        this.onLabelClick = () => {
            this.setState((state) => ({ //* 2)
                done: !state.done,
            }));
        };
        this.setMarkImportant = () => {
            this.setState((state) => ({ //* 2)
                important: !state.important,
            }));
        };
    }
}

// =========================================================
//* 3) Деструктурируем поля state

export default class TodoListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            done: false,
            important: false,
        };
        this.onLabelClick = () => {
            this.setState(({ done }) => ({
                done: !done,
            }));
        };
        this.setMarkImportant = () => {
            this.setState(({ important }) => ({
                important: !important,
            }));
        };
    }
}