import React from 'react';
import PropTypes from 'prop-types';

import './row.scss';

// Компонент обертка для деления на 2 стороны
const Row = ({ leftElement, rightElement }) => { // Деструктурируем поля получаемые из props
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {leftElement}
            </div>
            <div className="col-md-6">
                {rightElement}
            </div>
        </div>
    )
};

Row.propTypes = {
    leftElement: PropTypes.node,
    rightElement: PropTypes.node,
};

export default Row;