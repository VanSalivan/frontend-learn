// Dependencies
import React from 'react';

// Externals
import styles from './Button.module.scss'

interface IButtonProps {
  addTodo: () => void;
}

const Button = (props: IButtonProps) => {
  return <button className={styles.button} onClick={props.addTodo}>Добавить</button>;
};

export { Button };
