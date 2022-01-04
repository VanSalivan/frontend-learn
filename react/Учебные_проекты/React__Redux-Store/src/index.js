// Импорты библиотек
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Импорты компонентов
import App from './components/app';
import ErrorBoundry from './components/error-boundry';

// Импорты API данных
import BookStoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context/';
import store from './store';

const bookStoreService = new BookStoreService();

ReactDOM.render(
    // Предоставляет доступ к Redux store
    <Provider store={store}>
        {/* Обработка ошибок в компонентах ниже */}
        <ErrorBoundry>
            {/* Передает сервис через ContextAPI */}
            <BookstoreServiceProvider value={bookStoreService}>
                {/* Router из пакета react-router */}
                <Router>
                    {/* Само приложение */}
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);