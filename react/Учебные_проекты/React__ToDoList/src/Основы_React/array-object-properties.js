import React from 'react'; //* Импорт обьекта React
import ReactDOM from 'react-dom'; //* ReactDOM преобразует виртуальный DOM в обычный DOM

import HeaderTitle from './components/header-title';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

//! App компонент
// =========================================================
//* 1) Объявляем и передаем массив обьектов через атрибут в обьект props

const App = () => {
    const todoData = [ //* 1)  Создаем
        { label: 'Learn React', important: false },
        { label: 'Create App', important: true },
        { label: 'Have a lunch', important: false },
    ];
    return (
        <div>
            <HeaderTitle />
            <SearchPanel />
            <TodoList todos={todoData} /> //* 1) Передаем
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

//! todo-list компонент
// =========================================================
// ? Этап №1

//* Деструктуризация и индексы массива
function TodoList({ todos }) {
    return (
        <ul>
            <li><TodoListItem label={todos[0].label} important={todos[0].important} /></li>
            <li><TodoListItem label={todos[1].label} important={todos[1].important} /></li>
        </ul>
    );
}

// =========================================================
// ? Этап №2 

//* Дробление и вставка элементов внутрь JSX кода
function TodoList({ todos }) {
    const firstEl = (
        <li><TodoListItem label={todos[0].label} important={todos[0].important} /></li>
    );

    return (
        <ul>
            { firstEl}
            <li><TodoListItem label={todos[1].label} important={todos[1].important} /></li>
        </ul>
    );
}

// =========================================================
// ? Этап №3

//* Вставка массива элементов
function TodoList({ todos }) {
    const elements = todos.map((item) => (<li><TodoListItem label={item.label} important={item.important} /></li>));
    //* Элементы создаваемые функцией map => это JSX элементы

    return (
        <ul>
            {elements}
        </ul>
    );
}

// =========================================================
// ? Этап №4

//* Расскладываем обьект на коллекцию ключей : значений с помощью SPREAD оператора ...
function TodoList({ todos }) {
    const elements = todos.map((item) => (<li><TodoListItem { ...item } /></li>));
    //* spread оператора ... берет каждое свойство из обьекта item и передает в качестве атрибута вместе со значением в "<TodoListItem />"
    //! При условии совпадения имен свойст обьекта label={item.label}

    return (
        <ul>
            {elements}
        </ul>
    );
}