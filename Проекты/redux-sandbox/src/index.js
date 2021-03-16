import { createStore } from "redux";

const reducer = (state = 10, action) => {

    switch (action.type) {
        case 'INC':
            return state + 1;

        default:
            return state
    };
};

const store = createStore(reducer);

store.subscribe(() => { //subscribe - вызывается после каждого изменения state
    console.log(store.getState())
});

store.dispatch({ type: 'INC' }) // обновляет state по внутри store по типу переданого действия
store.dispatch({ type: 'INC' })
