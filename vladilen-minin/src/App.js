import React, { Component } from 'react';
import TodoList from './Todo/TodoList';

export default class App extends Component {

  state = {
    todos: [
      { id: 1, complete: false, title: 'Купить хлеб' },
      { id: 2, complete: false, title: 'Купить масло' },
      { id: 3, complete: false, title: 'Купить молоко' }
    ]
  };

  deleteItem = (id) => { // ищем по id
    this.setState((state) => { // передаем функцию с аргументом state
      const index = state.todos.findIndex((el) => el.id === id); // находим индекс выбраного элемента

      const before = state.todos.slice(0, index);
      const after = state.todos.slice(index + 1);
      const newArray = [...before, ...after]; // склеиваем 2 массива в один

      return {
        todos: newArray
      };
    })
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Обучение React</h1>
        <TodoList todos={this.state.todos} onDeleted={this.deleteItem} />
      </div>
    );
  }
}