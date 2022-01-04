import React from 'react';
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
// =========================================================
// ? Компонент функция

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal',
    };

    return (
        <span className="todo-list-item">
            <span className="todo-list-item-label" style={style}>{label}</span>

            <button type="button" className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>

            <button type="button" className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
        </span>
    );
};

// =========================================================
// ? Компонент класс

//* 1) При обьявлении класса наследуем прототип из обьекта React.Component
//* 2) Для рендера компонента класса необходимо вызвать функциюю render с кодом разметки внутри
//* 3) Для получения свойств обьекта props необходимо обращаться к this.props;
//* 4) Если сразу нет причин использовать компонент класс - используй компонент функцию
//*    Если компоненту нужно работать с внутренним состоянием - рефакторим в класс

export default class TodoListItem extends React.Component { //* 1)
    render() { //* 2)
        const { label, important = false } = this.props; //* 3)
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        };

        return (
            <span className="todo-list-item">
                <span className="todo-list-item-label" style={style}>{label}</span>

                <button type="button" className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button" className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}
