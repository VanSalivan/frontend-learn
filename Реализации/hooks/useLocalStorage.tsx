import { useState, useEffect } from 'react';

// eslint-disable-next-line max-len
const useLocalStorage = (initialValue: IExampleType, key: string): [IExampleType, React.Dispatch<any>] => {
  // Проверяем есть ли в localStorage необходиммые данные
  const getValue = () => {
    const storage = localStorage.getItem(key); // string || null

    if (storage) {
      return JSON.parse(storage); // []
    }

    return initialValue;
  };

  const [value, setValue] = useState<IExampleType>(getValue);

  // Изменение данных в localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export { useLocalStorage };
