// Dependencies
import React from 'react';

// Externals
import { ITodo } from '../../types/data';

interface ITodoItem extends ITodo {
  toogleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem = (props: ITodoItem) => {
  const { id, title, completed, toogleTodo, removeTodo } = props;

  return (
    <div>
      <input type='checkbox' checked={completed} onChange={() => toogleTodo(id)} />
      <span style={{display:'inline-block', margin:'0 10px'}}>{title}</span>
      <button onClick={() => removeTodo(id)} style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'red'
          }}>X</button>
    </div>
  );
};

export { TodoItem };
