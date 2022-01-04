// Функция отвечает массива
const updateCartItems = (cartItems, item, index) => {

    // Полностью удаляем элемент из массива 
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, index), // старт, элементы до индекса
            ...cartItems.slice(index + 1)  // значения после индекса, до конца
        ];
    };

    // Добавляет новый элемент к концу массива
    if (index === -1) { // "findIndex" возвращает -1 если элемент не найден == новый элемент
        return [
            ...cartItems,
            item
        ];
    };

    // Обновляет текущей массив и заменяет существующий элемент новым
    return [
        ...cartItems.slice(0, index), // старт, элементы до индекса
        item, // новый элемент
        ...cartItems.slice(index + 1)  // значения после индекса, до конца
    ];
};

// Функция создания нового элемента списка
const updateCartItem = (book, item = {}, quantity) => {

    // присваем поумолчанию если объект undefined
    const {
        id = book.id,
        title = book.title,
        count = 0,
        total = 0 } = item;

    return { // возвращаем обновленный объект
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    };
};

// Функция создания заказа
const updateOrder = (state, bookId, quantity) => {
    const { bookList: { books }, shoppingCart: { cartItems } } = state;

    const book = books.find((book) => book.id === bookId);
    const itemIndex = cartItems.findIndex((({ id }) => id === bookId)); // индекс выбранного итема
    const item = cartItems[itemIndex]; // вернет № элемента или undefined

    const newItem = updateCartItem(book, item, quantity); // создаем новый массив не модифицируя старый
    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
};

// Функция обновления состояния у объекта shoppingCart
const updateShoppingCart = (state, action) => {

    // возвращает перичное состояние "shoppingCart"
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    };

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1)

        case 'BOOK_REMOVE_FROM_CART':
            return updateOrder(state, action.payload, -1)

        case 'ALL_BOOKS_REMOVE_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
            return updateOrder(state, action.payload, -item.count)

        default:
            return state.shoppingCart;
    };
};


export default updateShoppingCart;