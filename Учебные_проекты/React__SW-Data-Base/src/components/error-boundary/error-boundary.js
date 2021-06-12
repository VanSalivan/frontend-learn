import React, { Component } from 'react';
import ErrorIndicator from "../error-indicator";

import './error-boundary.scss';

// Компонент "Граница ошибки" - позволяет отлавливать/ограничивать поле ошибки
export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };

    // функция ловит ошибку и останавливает ее всплытие
    componentDidCatch() { // заменяем флаг ошибки при срабатывании
        this.setState({
            hasError: true
        });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return this.props.children; // возвращаем переданные параметры внутри тела props
    }
}
