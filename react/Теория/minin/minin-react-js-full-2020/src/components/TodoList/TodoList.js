import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss'

function TodoList(props) {

    return (
        <ul className="todo-list">
            {props.propsArray.map((el, index) => {
                return <TodoItem todo={el} key={el.id} index={index} onToggle={props.onToggle} />
            })}
        </ul>
    )
};


TodoList.propTypes = {
    propsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default TodoList;