// Dependencies
import React from 'react';

// Externals

interface IInputProps {
  value: string;
  handleChange: (e: React.ChangeEventHandler<HTMLInputElement>) => void;
  handleKeyDown: (e: React.ChangeEventHandler<HTMLInputElement>) => void;
  inputRef: React.LegacyRef<HTMLInputElement>;
}

const Input = ({ value, handleChange, handleKeyDown, inputRef }: IInputProps) => {
  return <input type='text'/>
  // return <input type='text' value={value} onChange={handleChange} ref={inputRef} onKeyDown={handleKeyDown}/>
};

export { Input }