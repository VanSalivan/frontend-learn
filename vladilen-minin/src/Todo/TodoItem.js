import React, { Component } from "react";
import PropTypes from 'prop-types';

//* Инлайнова стилизация через обьект
//? как управлять ховерами и медиа запросами?
const style = {
    // li: {
    //     display: "flex",
    //     justifyContent: "space-between",
    //     alignItem: "center",
    //     padding: "0.25rem",
    //     margin: "0.5rem 0",
    //     border: "1px solid grey",
    //     borderRadius: "4px"
    // },
    input: {
        marginRight: "0.5em"
    },
    button: {
        backgroundColor: "black",
        color: "white",
        fontSize: "16px",
        border: "2px solid grey"
    }
}

class TodoItem extends Component {

    state = {
        done: false,
    }

    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done
            }
        })
    }

    render() {
        const { todo, index, toogleOn, onDeleted } = this.props;

        let todoList__item = "todo-list__item";
        if (this.state.done) {
            todoList__item += " done";
        }

        return (
            <li className={todoList__item} >
                <span onClick={this.onLabelClick}>
                    <input type="checkbox"
                        checked={this.state.done}
                        style={style.input}
                        onChange={toogleOn}
                    />
                    <strong>{index + 1}</strong>&nbsp;
                    {todo.title}
                </span>

                <button style={style.button} onClick={onDeleted} >&times;</button>
            </li>
        )
    }
}

// Валидация типов параметров от получаемого обьекта "props"
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    toogleOn: PropTypes.func.isRequired,
}

export default TodoItem;