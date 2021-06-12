import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service";
import Spiner from '../spiner/spiner';
import ErrorIndicator from "../error-indicator/error-indicator";
import PropTypes from 'prop-types';

import './random-planet.scss';

// Компонент для работы с состоянием и логикой
export default class RandomPlanet extends Component {
    swapi = new SwapiService();
    state = {
        planet: {}, // поле с данными обьекта получаемого с сервера
        loading: true, // флаг показа спиннера
        error: false // флаг ошибки
    };

    static defaultProps = { // props по-умолчанию
        updateInterval: 10000,
    };

    static propTypes = {
        updateInterval: PropTypes.number
    };

    // отправляет запросы/срабатывает после добавления элементов в DOM
    componentDidMount() {// в момент создания компонента отправляем запрос на сервер
        this.updatePlanet(); // получаемый ответ отображаем на странице через смену state
        setInterval(this.updatePlanet, this.props.updateInterval);
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false, // загрузка закончилась если мы получили ошибку
        })
    };

    onPlanetLoaded = (planet) => { // стрелка для работы с значением this
        this.setState({
            planet, // передаем в state обьект planet который приходит из this.swapi.getPlanet
            loading: false // снимаем флаг спинера в state как только данные готовы
        })
    };

    updatePlanet = () => {
        // console.log("обновление")
        // Генерация случайной планеты через числа
        const itemId = Math.floor(Math.random() * 17) + 2;
        this.swapi.getPlanet(itemId) // получаем планету по передаваемому параметру ID
            .then(this.onPlanetLoaded) // дожидаемся ответа и устанавливаем новый стейт из параметров result от сервера
            .catch(this.onError);
    };

    render() {  // null В JSX разметке игнорируется
        // у нас есть данные только тогда когда(нет не загрузки || не ошибки );
        const hasData = !(this.state.loading || this.state.error);
        // если мы загружаемася(true по умолчанию) : null(ничего)
        const spiner = this.state.loading ? <Spiner /> : null;
        // если не загружаемся/значит данные пришли показывает компонент с данными : null(ничего) - не отображает ничего
        const content = hasData ? <PlanetViev planet={this.state.planet} /> : null;
        // если есть ошибка то показываем ее
        const errorMessage = this.state.error ? <ErrorIndicator /> : null;
        return (
            <div className="random-planet card" >
                {errorMessage}
                {spiner}
                {content}
            </div>
        );
    }
};

// Компонент для отображения загруженых/полученных данных
const PlanetViev = ({ planet }) => {
    return (
        <React.Fragment>
            <img className="random-planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`} alt="planet" />
            <div className="card-body">
                <h4>{planet.name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{planet.population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{planet.rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{planet.diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};