/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// ? Коллекции и ключи
//* 1) Каждому JSX элементу в массиве нужно уникальное свойство "key"
//*    Когда мы вставляем массив элементов Реакт хочет чтобы у каждого элемента был уникальный ключ свойство "key"
//*    Реакт старается минимизировать работу с DOM элементами
//*    Процесс поиска изменений называется - reconciliation(реконсилейшен) алгоритм

//* 2) React использует key чтобы эффективно сравнивать элементы при обновлении

//* 3) Не стоит делать ключи из индексов массива
//*    Если мы не будем передавать ключи Реакт по умолчанию проставит ключи соответствующие № индекса массива

//! App компонент
// =========================================================
const App = () => {
    const todoData = [
        { label: 'Learn React', important: false, id: '1' }, //* добавляем уникальный id - ключ
        { label: 'Create App', important: true, id: '2' },
        { label: 'Have a lunch', important: false, id: '3' },
        { label: 'Have a dinner', important: false, id: '4' },
    ];
    return (
        <div>
            <TodoList todos={todoData} />
        </div>
    );
};

//! todo-list компонент
// =========================================================
const TodoList = ({ todos }) => {
    // eslint-disable-next-line arrow-body-style
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item; //* Деструктурируем обьект чтобы не передавать id вместе с массивом параметров в атрибуты

        return (
            <li key={item.id}> //* 1) Добавляем ключ для шаблона
                <TodoListItem {...itemProps} />
            </li>
        );
    });

    return (
        <ul>
            {elements}
        </ul>
    );
};