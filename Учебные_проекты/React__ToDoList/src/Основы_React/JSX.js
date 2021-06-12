import React from 'react'; //* Импорт обьекта React
import ReactDOM from 'react-dom'; //* ReactDOM преобразует виртуальный DOM в обычный DOM
// ? Создаение элемента

// const example = <h1>Работает</h1>; //* Создание Реакт элемента
// const example = React.createElement("h1", null, "Hello World"); //* Обработка кода Babel`ом
// ReactDOM.render(example, document.querySelector("#root")); //* Рендер (первым что мы добавляем, второе - куда);

// ? JSX
//* 1) Корнем JSX  должна быть обертка например  <div></div>
//* 2) JSX умеет использовать в разметке JavaScript выражения и их значения <тег>{ переменная[0] }</тег>
//* 3) Для вставки Реакт элементов, строк, чисел, выражений необходима обертка тела { вставляемый элемент }
//* 4) Значение null => скрывает отображение элемента

function TodoList() {
    const items = ['Learn React', 'Build new App'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
}

const HeaderTitle = () => (
    <h1>My ToDo List</h1>
);

//* Вставка атритбутов
function SearchPanel() {
    const searchText = 'Нажми для поиска';
    return (
        <input placeholder={searchText} className="input" />
    );
}

function App() {
    const isLoggedIn = false;
    const loginBox = <span>Текст для Тэрнарного оператора/флага</span>;
    return (
        <div>
            {isLoggedIn ? null : loginBox}
            {/* <span>{(new Date()).toString()}</span> */}
            <HeaderTitle />
            <SearchPanel />
            <TodoList />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
