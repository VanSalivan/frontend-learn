import React from "react";

import "./error-indicator.scss";

// Компонент "Индикатор ошибки" - визуализация ошибки
const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <h2>404</h2>
            <span>Неприятная ошибка</span>
            <span>Но, мы все исправим, потом. . .</span>
        </div>
    )
};

export default ErrorIndicator;