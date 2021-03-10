import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

const App = () => {
    return (
        <MyContext.Provider value="Соленое">
            <Child />
        </MyContext.Provider>
    );
};

const Child = () => {
    //* Использование хука
    // в хук передаем обьект контекст = const MyContext = React.createContext();
    const value = useContext(MyContext);

    return <p>Что-то {value}</p>

    //* Нативное использование контекста
    // return (
    //     <MyContext.Consumer>
    //         {(value) => <p>{value}</p>}
    //     </MyContext.Consumer>
    // )
};

ReactDOM.render(<App />, document.getElementById('root'));