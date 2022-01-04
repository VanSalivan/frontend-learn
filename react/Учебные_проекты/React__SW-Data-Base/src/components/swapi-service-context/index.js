import React from 'react';

// Использование
//* Provider = Оборачивает часть приложения и передает контекст через value={Передаваемого Значение}
// <Provider value={Передаваемого Значение}>
// Тело компонентов для которых доступно {Передаваемого Значение}
//</Provider >

//* Consumer = Вызывает/получает переданный контекст через функцию
//<Consumer> {
// принимает функцию(Передаваемого Значение) => <Компонент нужно применить data={Передаваемого Значение} />
//}</Consumer >

const { // Присваиваем Кричащие названия значений
    Provider: SwapiServiceProvider, //* Provider = Оборачивает часть приложения
    Consumer: SwapiServiceConsumer  //* Consumer = Вызывает/получает переданный контекст через функцию
} = React.createContext();

export { SwapiServiceProvider, SwapiServiceConsumer };
