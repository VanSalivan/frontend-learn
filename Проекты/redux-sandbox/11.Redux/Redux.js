//? 115. Введение в Redux
//* - Redux решает проблему управления состоянием в приложении
//* - Redux предлагат хранить state в одном "глобаном" объекте
//* - Функция "Reducer" обновляет глобальный state в ответ на "Actions"(события/действия)
//* - Объект "Store" координирует действия 

//? 117. Reducer
//* - Reducer это обычная функция = (STATE, ACTION) => newState
//* - Если STATE - undefined нужно вернуть первоначальный (initial) STATE
//* - Если тип ACTION - неизвестен - нужно вернуть STATE без изменений

//? 118. Redux Store
//* - Store = координирует работу с данными в Redux приложении, == тонкая обертка вокруг функции "REDUCER"

//* - store создает функция createStore(reducer)
//* - store.getState() - получаем state
//* - store.dispatch({type: "тип действия"}) - обрабатываем какое либо действие и передаем тип действия
//* - subscribe - позволяет получать notification(читает state) после каждого обновления в store
// store.subscribe(() => console.log(store.getState()) );

//? 
//* - 
//* - 
//* - 