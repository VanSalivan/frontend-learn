/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        label: '',
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value,
        });
    };

    // OnChange() обновляет state, а state обновляет value элемента
    // state - едиственный источник значений
    onSubmit = (e) => {
        e.preventDefault();
        // eslint-disable-next-line react/destructuring-assignment
        this.props.addElement(this.state.label);
        this.setState({
            label: '',
        });
    };

    render() {
        return (
            <form
                className="item-add-form d-flex"
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    placeholder="What needs to be done"
                    className="item-add-form__input form-control"
                    onChange={this.onLabelChange}
                    // Значение элемента устанавливается из state-состояния компонента = контролируемый элемент
                    // eslint-disable-next-line react/destructuring-assignment
                    value={this.state.label}
                />
                <button
                    className="item-add-form__button btn btn-outline-secondary"
                    onClick={this.onSubmit}
                >Add item
                </button>
            </form>
        );
    }
}
