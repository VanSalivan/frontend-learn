import TodoList from './Todo/TodoList';

export default function App() {

  let todos = [
    { id: 1, complete: false, title: 'Купить хлеб' },
    { id: 2, complete: false, title: 'Купить масло' },
    { id: 3, complete: false, title: 'Купить молоко' }
  ]

  function toogleTodo(id) {
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo
    })
  }

  return (
    <div className="wrapper">
      <h1>Обучение React</h1>
      <TodoList todos={todos} toogleOn={toogleTodo} />
    </div>
  );
}