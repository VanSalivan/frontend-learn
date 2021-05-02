import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './addTodo.scss'

const AddTodo = ({ onCreate }) => {
    const [inputValue, setInputValue] = useState('');

    function submitHandler(event) {
        event.preventDefault()

        if (inputValue.trim()) {
            onCreate(inputValue);
            setInputValue('')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input value={inputValue} onChange={event => setInputValue(event.target.value)} />
            <button className="todo-form__btn-add-item" type="submit">Добавить задание</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo;