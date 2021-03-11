import { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div>
                <button onClick={() => setValue((v) => v + 1)}>+</button>
                <button onClick={() => setVisible(false)}>hide</button>
                {/* <ClassCounter value={value} /> */}
                {/* <HookCounter value={value} /> */}
                <Notification />
            </div>
        )
    } else {
        return <button onClick={() => setVisible(true)}>show</button>
    }
};

const Notification = () => {

    const [visible, setVisible] = useState(true);

    useEffect(() => { // скрываем компонент
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 2000);
        return () => clearTimeout(timeout); // Очищаем таймаут при помощи clear(возврата функции) чтобы избежать утечки памяти
    }, []);

    return (
        <div>
            {visible && <p>Hey</p>}
        </div>
    )
};

const HookCounter = ({ value }) => {
    //* componentDidMount
    // Сравнивает данные массива переданные во втором агрументе 
    // если хоть одно значение измениться - хук будет вызван повторно во время обновления
    // useEffect(() => console.log('Работает аналогично : Mount'), []);

    //* componentDidUpdate
    // В отличии от componentDidUpdate хук Effect будет вызывать и при монжате
    useEffect(() => console.log('Работает аналогично : Update'));

    //* componentWillUnmount
    // функция очистки это функция которую мы возвращаем из функции эффекта
    // useEffect(() => () => console.log('Работает аналогично : Unmount'));

    // Комбинация Mount и Unmount
    useEffect(() => {
        console.log('Работает аналогично : Mount') // Сработает когда компонент создается
        return () => console.log('Работает аналогично : Unmount') // Сработает когда компонент уничтожается
    }, []); // Код сработает один раз поскольку массив с данными зависимости - пустой массив


    return <p>{value}</p>
};

class ClassCounter extends Component {
    componentDidMount() {
        console.log("class: mount")
    };

    componentDidUpdate(props) {
        console.log('class: update')
    };

    componentWillUnmount() {
        console.log('class: unmount')
    };

    render() {
        return <p>{this.props.value}</p>
    };
}

ReactDOM.render(<App />, document.getElementById('root'));