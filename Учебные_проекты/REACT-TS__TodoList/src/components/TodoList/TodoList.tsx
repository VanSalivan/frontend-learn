// Dependencies
import React from 'react';

// Externals
import { ITodo } from '../../types/data';
import TodoItem from '../TodoItem';

interface ITodoListProps {
  items: ITodo[];
  toogleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList = (props: ITodoListProps) => {
  const { items, toogleTodo, removeTodo } = props;

  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          toogleTodo={toogleTodo}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </div>
  );
};

export { TodoList };
