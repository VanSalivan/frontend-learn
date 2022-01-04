import React, { useState, useEffect } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

import { ITodo } from "../components/inteface";

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    //Забираем элементы: если в сторадже null парсим пустой объект
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];

    setTodos(saved);
  }, []);

  // Записываем новые действия в сторадж
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };

    // setTodos([newTodo, ...todos]); // НЕ гарантирует что мы будем работать с предыдущим стейтом
    setTodos((prev) => [newTodo, ...prev]);
  };

  // Удаление конкретного элемента из массива
  const removeHandler = (id: number) => {
    const ShouldRemove = window.confirm(
      "Вы уверены, что хотите удалить элемент?"
    );
    if (ShouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  // Смена флага состояния элемента массива и возвращаем новый массив (...старые данные, новые данные)
  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
};
