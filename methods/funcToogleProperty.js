// Функция смены флага параметра
// eslint-disable-next-line class-methods-use-this
toogleProperty(arr, id, propName) {
    const elementIndex = arr.findIndex((el) => el.id === id); // индекс массива элемента

    // Обновляем обьект который содержиться в нужном месте в массиве
    const oldItem = arr[elementIndex];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }; // делаем shell копию и перезаписываем указаное свойство

    // Конструируем новый массив
    return [
        ...arr.slice(0, elementIndex),
        newItem, // вставляем новое значени массива между удаленными
        ...arr.slice(elementIndex + 1),
    ];
}

onToogleDone = (id) => {
    // Мы не можем менять старый стейт
    this.setState(({ todoData }) => ({
        todoData: this.toogleProperty(todoData, id, 'done'),
    }));
};