import React, { Component } from 'react';
import BookListItem from '../book-list-item'
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc'
import { fetchBooks, bookAddedToCart } from '../../actions'

import './book-list.scss';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator'

// Презентационный компонент
const BookList = ({ books, onAddetToCart }) => {
    return (
        <ul className="book-list">
            {books.map((book) => {
                return (
                    <li key={book.id}>
                        <BookListItem book={book} onAddetToCart={() => onAddetToCart(book.id)} />
                    </li>
                )
            })}
        </ul>
    );
};

// Компонент получающий данные
class BookListContainer extends Component {

    componentDidMount() {
        // Данные из "mapDispatchToProps" для Редакса
        this.props.fetchBooks()
    };

    render() {
        const { books, loading, error, onAddetToCart } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList books={books} onAddetToCart={onAddetToCart} />
    };
};

// Эта функция определяет какие свойства получит ДАННЫЙ компонент из Redux
const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return {
        books: books,
        loading: loading,
        error: error
    };
};

// Может быть обьектом или функцией через которую передаем экшены которые мы будем использовать
const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps; // параметр из функции выше по вложенности "withBookstoreService"
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddetToCart: (id) => dispatch(bookAddedToCart(id))
    };
};


export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));