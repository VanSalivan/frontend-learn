//* Удаление конкретного элемента из массива
deleteItem = (id) => { // ищем по id
    this.setState((state) => { // передаем функцию с аргументом state
        const index = state.todos.findIndex((el) => el.id === id); // находим индекс выбраного элемента

        //[a, b, c, d, e]  
        //[a, b,  , d, e]  
        const before = state.todos.slice(0, index); // копируем массив от 0 до заданого индекса
        const after = state.todos.slice(index + 1); // копируем массив от заданого индекса до конца

        const newArray = [...before, ...after]; // склеиваем 2 массива в один

        return {
            todos: newArray
        };
    })
}