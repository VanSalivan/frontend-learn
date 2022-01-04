//Action creaters - функции событий для REDUX

// Запрос загрузки книг со сменой спинера
const bookRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    };
};

// Успешная загрузка книг
const bookLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

// Состояние ошибки
const bookError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    };
};

// Отправка экшенов для компонентов в Редакс - обший процесс получения книг в этом приложении 
const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(bookRequested()); // Запрос обновления данных и отображение спинера
    bookstoreService.getBook() // вызываем метод получения данных
        // 2 - диспачим action в store // передаем действие в redux store
        .then((data) => dispatch(bookLoaded(data))) // Обрабатываем Промис
        .catch((err) => dispatch(bookError(err)));
};

// Добавление книги в таблицу
export const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    };
};

// Удаление книги из таблицы
export const bookRemoveFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVE_FROM_CART',
        payload: bookId
    };
};

// Удаление всего типа книг по Id
export const allBooksRemoveFromCart = (bookId) => {
    return {
        type: 'ALL_BOOKS_REMOVE_FROM_CART',
        payload: bookId
    };
};

export {
    fetchBooks
};