/* eslint-disable linebreak-style */
import { useRef } from 'react';

export const useDebounced = (func: Function, delay = 400) => {
  const timeoutRef = useRef<undefined | number>();

  return (...args:any[]) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => func(...args), delay);
  };
};
