// Dependencies
import React, { useState, useRef, useEffect } from 'react';

// Externals
import { ITodo } from '../../types/data';
import Button from '../Button';
import TodoList from '../TodoList';

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }
  
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') addTodo()
  }
  
  const addTodo = () => {
    if (value) {
      setList([...list,{
          id: Date.now(),
          title: value,
          completed: false,
        },
      ]);

      setValue('');
    }
  };
  const removeTodo = (id: number): void => {
    setList(list.filter((todo) => todo.id !== id))
  }
  
  const toogleTodo = (id: number): void => {

    setList(list.map(item => {
      if (item.id !== id) return item;

      return {
        ...item,
        completed: !item.completed
      }
    }))
  }

  useEffect(() => {
    if(inputRef.current) inputRef.current.focus()
  }, [])

  return (
    <div>
      <div>
        <input type='text' value={value} onChange={handleChange} ref={inputRef} onKeyDown={handleKeyDown} />
        <Button addTodo={addTodo}/>
      </div>

      <TodoList items={list} removeTodo={removeTodo} toogleTodo={toogleTodo}/>
    </div>
  );
};

export { App };
