import React from 'react';
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */

import './item-status-filter.css';

// <ItemStatusFilter filterValue={filterValue} /> передает значение по умолчанию "filterValue" сверху

export default class ItemStatusFilter extends React.Component {
    buttons = [ // Массив статусов и названий
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ];

    render() {
        const { filterValue, onFilterChange } = this.props;

        const buttons = this.buttons.map(({ name, label }) => { // возвращаем новый массив со значениями
            const isActiveButton = filterValue === name; // Активная кнопка = переданое сверху значение === имя кнопки
            const classStyle = isActiveButton ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    type="button"
                    className={`btn ${classStyle}`}
                    key={name}
                    onClick={() => onFilterChange(name)}
                >
                    {label}
                </button> // Уникальный ключ = имя фильтра
            );
        });

        // Помещаем новый массив внутрь дива обертки
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}
