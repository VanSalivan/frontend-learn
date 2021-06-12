import React, { Component } from 'react';
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */

import './search-panel.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class SearchPanel extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        searchValue: '',
    };

    onSearchChange = (e) => {
        const searchValue = e.target.value;
        this.setState({ searchValue });
        // eslint-disable-next-line react/destructuring-assignment
        this.props.onSearchChange(searchValue);
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Поиск дел"
                // eslint-disable-next-line react/destructuring-assignment
                value={this.state.searchValue}
                onChange={this.onSearchChange}
            />
        );
    }
}
