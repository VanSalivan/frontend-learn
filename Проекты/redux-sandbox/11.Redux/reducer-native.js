// Функция Reducer принимает стейт и обьект с типой события
// state - текущее состояние, action - обьект с типом совершаемого действия
const reducer = (state = 0, action) => {

    switch (action.type) { // Проверяет тип события и выпоняет действия с состоянием/state
        case 'INC':
            return state + 1;

        default:
            return state //Если тип события не был найдет - вернет состояние в том виде в котором мы его получили
    };
};

let state = reducer(undefined, {}); // передаем пустые значения для создания инициалиазции по умолчанию (state = 0)
console.log(state)

// передаем в state предыдущий результат вычислений
state = reducer(state, { type: 'INC' });
console.log(state)

state = reducer(state, { type: 'INC' });
console.log(state)
