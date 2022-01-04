/* eslint-disable no-plusplus */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import './app.css';

export default class App extends Component {
    maxid = 100;

    state = {
        todoData: [
            this.createTodoItem('Learn React'),
            this.createTodoItem('Make App'),
            this.createTodoItem('Have a lunch'),
        ],
        searchValue: '', // старовое значения для поисковой строки
        filterValue: 'active', // старовое значения для фильтрации массива задач = activ/Аall/done
    };

    // Функция создания обьектов массива элементов списка
    // eslint-disable-next-line react/sort-comp
    createTodoItem(text) {
        return {
            label: text, // Название задачи
            important: false, // Статус важности
            done: false, // Статус выполнености
            // Сгенерировать id
            id: this.maxid++, // Генерируем последовательные айди начиная с 100
        };
    }

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

    addElement = (text) => {
        const newItem = this.createTodoItem(text);
        // Добавить элемент в Массив
        this.setState(({ todoData }) => {
            // Нужно вернуть новое состояние
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray,
            };
        });
    };

    // Функция смены флага параметра
    // eslint-disable-next-line class-methods-use-this
    toogleProperty(arr, id, propName) {
        const elementIndex = arr.findIndex((el) => el.id === id); // индекс массива элемента

        // Обновляем обьект который содержиться в нужном месте в массиве
        const oldItem = arr[elementIndex];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] }; // делаем shell копию и перезаписываем указаное свойство

        // Конструируем новый массив
        return [
            ...arr.slice(0, elementIndex),
            newItem, // вставляем новое значени массива между удаленными
            ...arr.slice(elementIndex + 1),
        ];
    }

    onToogleDone = (id) => {
        // Мы не можем менять старый стейт
        this.setState(({ todoData }) => ({
            todoData: this.toogleProperty(todoData, id, 'done'),
        }));
    };

    onToogleImportant = (id) => {
        this.setState(({ todoData }) => ({
            todoData: this.toogleProperty(todoData, id, 'important'),
        }));
    };

    // eslint-disable-next-line class-methods-use-this
    search(items, searchVal) { // функция для поисковой строки
        if (searchVal.length === 0) { // если строка пустая
            return items; // возвращаем полный массив обьектов задач
        } // делаем новый массив фильтром (проверяем все названия на символьное совпадение с term параметром state(а))
        return items.filter((item) => item.label.toLowerCase().indexOf(searchVal.toLowerCase()) > -1);
    }

    // eslint-disable-next-line class-methods-use-this
    customFilter(items, filterCase) { // Метод фильтрации
        switch (filterCase) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    onSearchChange = (searchValue) => { // изменение результата поиска
        this.setState({ searchValue });
    };

    onFilterChange = (filterValue) => { // изменение результата фильтра
        this.setState({ filterValue });
    };

    render() {
        const { todoData, searchValue, filterValue } = this.state;
        // "customFilter" - фильтрует массив задач(после выполненой функции поиска(Массив обьектов, поисковое значение) Значение)
        const visibleItems = this.customFilter(this.search(todoData, searchValue), filterValue); // функция для поисковой строки
        const doneCount = this.state.todoData // обращаемся к массиву
            .filter((el) => el.done) // Фильтр возвращает новый массив у которого все elements = true
            .length; // и считаем длину этого массива

        const todoCount = this.state.todoData.length - doneCount; // общее количество элементов - число выполненых

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter filterValue={filterValue} onFilterChange={this.onFilterChange} />
                </div>

                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToogleImportant={this.onToogleImportant}
                    onToogleDone={this.onToogleDone}
                />
                <ItemAddForm addElement={this.addElement} />
            </div>
        );
    }
}
