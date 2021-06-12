//! Удаление компонента

//? 1) setState() не должен изменять текущий state
//? 2) Методы которые изменяют массив использовать нельзя

// ToDo Переписать компонент app с функции на класс а, todoDate сделать частью state(a) приложения
//* Тогда мы сможем вызывать функциюю "setState()" это даст Реакту знать что приложение нужно обновить
// =========================================================
//* Шаг 1) импортируем { Component } class
import React, { Component } from 'react';
// =========================================================
//* Шаг 2)
const App = () => {
    const todoData = [
        { label: 'Learn React', important: false, id: 1 },
        { label: 'Make App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 },
    ];

    return (
    );
};
//* Шаг 2) Изменяем функцию на класс и экспортируем его по дефолту

export default class App extends Component {
    const todoData = [
        { label: 'Learn React', important: false, id: 1 },
        { label: 'Make App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 },
    ];

    return (
    );
};
// =========================================================
//* Шаг 3)
const todoData = [
    { label: 'Learn React', important: false, id: 1 },
    { label: 'Make App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
];
//* Шаг 3) Превращаем переменную "todoData" в state

state = {
    todoData: [
        { label: 'Learn React', important: false, id: 1 },
        { label: 'Make App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 },
    ]
}
// =========================================================
//* Шаг 4) помещаем return в функцию "render()"
render() {
    return (
        <div className="todo-app" >
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} onDeleted={(id) => console.log('del', id)} />
        </div>
    );
}
// =========================================================
//* Шаг 5) "todoData" теперь часть "state" поэтому ставим "this.state.todoData"
<TodoList todos={this.state.todoData} onDeleted={(id) => console.log('del', id)} />

// =========================================================
//* Шаг 6) Пишем функцию для удаления тест
//* Заменяем onDeleted={this.deleteItem}
export default class App extends Component {
    deleteItem = (id) => { //* Шаг 6)
        console.log('del', id);
    };
    render() {
        return (
            <div className="todo-app">
                <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} /> //* Шаг 6)
            </div>
        );
    }
}
// =========================================================
//* Шаг 7) Пишем функцию deleteItem
deleteItem = (id) => {
    this.setState(({ todoData }) => { //* 1) Деструктуктурируем "todoData"
        const elementIndex = todoData.findIndex((el) => //* 2) Метод findIndex() возвращает индекс в массиве "todoData"
            el.id === id //* 3) Ищем индекс у элемента как тоочно такой же как мы получили
        ); 
        console.log(elementIndex);
        todoData.splice(elementIndex, 1); //* 4) Метод "splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
        return { //* 5) Возвращаем новое состояние "state"
            todoData: todoData
        };
    });
};
// !!! Нельзя изменять структуры данных которые мы получаем внутрь setState(a)

// =========================================================
//* Шаг 8) Нужно вернуть новый массив не изменяя старый

deleteItem = (id) => {
    this.setState(({ todoData }) => {
        const elementIndex = todoData.findIndex((el) => el.id === id);
        //* 6) Метод slice() возвращает новый массив, содержащий копию части исходного массива.
        const before = todoData.slice(0, elementIndex);//* 7) Первый параметр начало, второй окончание
        const after = todoData.slice(elementIndex + 1);//* 8) если мы не передаем аршумент это значит "до самого конца"
        const newArray = [...before, ...after]; //* 9) с помощью spread оператора конструируем новый массив из элементов до и после удаленного значения
            return { 
                todoData: newArray,  //* 10) Возвращаем новый массив без элемента который мы удалили
            };
    });
};

// =========================================================
//* Шаг 9) Рефактор метода

deleteItem = (id) => {
    this.setState(({ todoData }) => {
        const elementIndex = todoData.findIndex((el) => el.id === id);
        const before = todoData.slice(0, elementIndex);
        const after = todoData.slice(elementIndex + 1);
        const newArray = [...before, ...after];
        return {
            todoData: newArray,
        };
    });
};
// =========================================================

deleteItem = (id) => {
    this.setState(({ todoData }) => {
        const elementIndex = todoData.findIndex((el) => el.id === id);
        const newArray = [
            ...todoData.slice(0, elementIndex),
            ...todoData.slice(elementIndex + 1),
        ];
        return {
            todoData: newArray,
        };
    });
};