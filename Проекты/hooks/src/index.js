import { useCallback, useEffect, useMemo, useState } from 'react';
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

// Функция получения контектной планеты - возвращает объект с параметрами планеты
const getPlanet = (id) => {
    return fetch(`https://swapi.dev/api/planets/${id}`)
        .then(res => res.json())
        .then(data => data)
};

// Цикл запроса
// 1) Cоздаем функцию request => 2) передаем ее в useRequest =>
// 3) useRequest передаем эту функцию в качестве зависимости в useEffect =>
// 4) Хук определяет что функция [request] изменилась и считает что нужно перезапустить useEffect =>
// 5) Перезапускает useEffect => 
// 6) отправляем данные request() => получаем данные => вызываем SetDataState(полученные данные) =>
// 7) SetDataState изменяет dataState на полученные данные => state изменился => обновляем компонент =>
// 8) Запускаем usePlanetInfo => 1) Cоздаем функцию request => 2) передаем ее в useRequest =>...

// Хук для получения данных из асинхронной
const useRequest = (functionRequest) => {

    //* useMemo - необходимо использовать бы кешировать значение
    // Если в хуке нужно создавать какое-то значение, которое будет передано в useEffect =>
    // useEffect будет использовать это значение чтобы сравнить старое значение и новое

    // Создавая новый обьект имеющий те же значения что и старый это все равно новый обьект =>
    // при сравнении двух "разных" обьектов с одинаковыми полями useEffect будет говорить
    // - что это разные обьекты и нужно вызвать "эффект"

    const initialState = useMemo(() => ({
        data: null,
        loading: true,
        error: null
    }), []);

    const [dataState, setDataState] = useState(initialState);
    // стартовое значение храниться в переменной
    console.log(dataState);

    useEffect(() => {

        // setter в хуках - уничтожает/выбрасывает значение предыдущего стейта,
        // поэтому нужно писать его полностью

        setDataState(initialState);
        // стартовое значение храниться в переменной

        let cancelled = false;

        functionRequest()
            .then(data => !cancelled && setDataState({
                data: data,
                loading: false,
                error: null
            }))
            .catch(error => !cancelled && setDataState({
                data: null,
                loading: false,
                error: error
            }));

        return () => cancelled = true;

    }, [functionRequest, initialState]);

    return dataState;
};

// Чтобы функция request - не пересоздавалась заново если id не изменился - используем хук useCallback
const usePlanetInfo = (id) => {
    const request = useCallback(() => getPlanet(id), [id])
    //* useCallback - запоминает значение функции которую мы в него передали
    //* и обновляет только если данные изменились с прошлого вызова - МЕМО - кеширование значения

    //* useCallback - синтаксис
    // useCallback(исполняемая функция,[cписок / массив данных которые должны измениться])

    //* useCallback - работа
    // Если данные не изменились useCallback - вернет ссылку на ту же функцию что мы использовали раньше
    // НО
    // Если id измениться useCallback вернет нам новую функцию

    //* useCallback - Паттерн
    // Часто используется если хуки зависят от функций
    // Пересоздавать функции каждый раз не имеет смысла и это может привести к неправильной работе приложения

    //! const request = () => getPlanet(id)
    // Каждый раз создаем новую функцию-запрос, не зависимо от того 
    // изменились ли данные от которых эта функция зависит
    return useRequest(request);
};

const PlanetInfo = ({ id }) => {
    const { data, loading, error } = usePlanetInfo(id); // получаем все данные

    if (error) {
        return <div>Что-то не так...</div>
    };

    if (loading) {
        return <div>Загрузка данных...</div>
    };

    return (
        <div>{id} - {data.name}</div> // проверяем если ли данные, если они есть выводим name
    );
};

ReactDOM.render(<App />, document.getElementById('root'));