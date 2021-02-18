import React from "react";
import PropTypes from 'prop-types';

function TodoItem({ todo, index }) {
    return <li><strong>{index + 1}</strong> {todo.title}</li>
}

// Валидация типов параметров от получаемого обьекта "props"
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem;