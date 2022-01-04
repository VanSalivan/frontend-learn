import React from 'react';
import PropTypes from 'prop-types';

import './item-list.scss';

// Часть отрисовки компонента
const ItemList = (props) => {
    const itemsLi = props.dataHOC.map(item => { // передача данных из props

        const label = props.children(item); // получаем снаружи функцию {(element) => `${element.name}`}

        return (
            <li className="list-group-item"
                key={item.id}
                onClick={() => props.onItemSelected(item.id)}>
                {label}
            </li>
        );
    });

    return (
        <ul className="item-list list-group" >
            {itemsLi}
        </ul>
    );
};

// Описание/валидация получаемых свойст - props
ItemList.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    children: PropTypes.func.isRequired
};

export default ItemList;