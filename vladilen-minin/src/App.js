import TodoList from './Todo/TodoList';

export default function App() {

  const todos = [
    { id: 1, complete: false, title: 'Купить хлеб' },
    { id: 2, complete: false, title: 'Купить масло' },
    { id: 3, complete: false, title: 'Купить молоко' }
  ]

  return (
    <div className="wrapper">
      <h1>Обучение React</h1>
      <TodoList todos={todos} />
    </div>
  );
}