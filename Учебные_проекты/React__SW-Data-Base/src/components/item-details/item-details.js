import React, { Component } from 'react';

import './item-details.scss';

// Компонент отображает данные персонажа с сервера - поля в теле
const Record = (props) => {
    const { item, field, label } = props;

    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export { Record };

// Компонент отображает данные персонажа с сервера - тело 
export default class ItemDetails extends Component {
    state = {
        itemIdBody: null,
        image: null,
    };

    componentDidMount() { // Отрисовывает данные персонажа если они были назначенны при старте
        this.updateItemBody();
    };

    // Если будем использовать смену props || state необходимо условие проверки чтобы не создать петлю
    componentDidUpdate(prevProps) {
        //Обновляем - если "ID из пропса" не такой же как "ID предыдущего пропса" 
        //или
        //Полученная функция получения е такая же как "полученные данные предыдущего пропса" 

        if (this.props.itemId !== prevProps.itemId || this.props.getData !== prevProps.getData) {
            this.updateItemBody(); // SetState =>  componentDidUpdate => SetState =>  componentDidUpdate = БЕСКОНЕЧНОСТЬ
        }
    }

    updateItemBody() { // функция для обновления выбранного персонажа
        const { itemId, getData, getImageUrl } = this.props

        if (!itemId) {  // если пользователь ничего не выбрал, в itemId будет null
            return;  // не обновляем персонажа
        }

        // если пользователь кого-то выбрал, делаем запрос на сервер за данными по ID из пропса
        getData(itemId).then(newItem => { // когда данные будут доступны получим newItem
            this.setState({
                itemIdBody: newItem, // присваиваем данные newItem стейту
                image: getImageUrl(newItem) // возвращает картинку по заданому ID
            });
        });
    };

    render() {
        // если не выбран не один персонаж == null
        if (!this.state.itemIdBody) {
            return <span>Выберите персонажа из списка</span>
        }

        return (
            <div className="item-details card" >
                <img className="item-image" src={this.state.image} alt="картинка элемента списка" />

                <div className="card-body">
                    <h4>{this.state.itemIdBody.name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {
                                    item: this.state.itemIdBody
                                });
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
};