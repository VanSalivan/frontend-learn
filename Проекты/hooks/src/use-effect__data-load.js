import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div>
                <button onClick={() => setValue((v) => v + 1)}>+</button>
                <button onClick={() => setVisible(false)}>hide</button>
                <PlanetInfo id={value} />
            </div>
        )
    } else {
        return <button onClick={() => setVisible(true)}>show</button>
    }
};

const PlanetInfo = (props) => {
    const [name, setName] = useState(null);

    //Мы не можем отменить сам запрос, но, мы игнорируем результат если эффект был очищен

    // 1 - запускаем эффект => 2 - Обновляем планету => 3 - начинается загрузка данных
    // если в этот момент мы еще раз обновим id планеты мы заново начнем грузить данные
    // но для предыдущего эффекта выполниться функция которая установит значение cancelled в false =>
    // и когда тот предыдущий эффект закончит загружать данные мы будем знать что мы будем эти даныне игнорировать

    useEffect(() => {
        let cancelled = false; // флаг отвечающий за игнорирование результата промиса
        fetch(`https://swapi.dev/api/planets/${props.id}`)
            .then(res => res.json())
            .then(data => !cancelled && setName(data.name))
        return () => cancelled = true;
    }, [props.id]);

    return <div>{props.id} - {name}</div>
};

ReactDOM.render(<App />, document.getElementById('root'));