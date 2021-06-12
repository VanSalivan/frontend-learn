import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Header from '../header';
import { PeoplePage } from '../pages'
import { PlanetPage } from '../pages'
import { StarshipPage } from '../pages'
import RandomPlanet from '../random-planet'

import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from '../swapi-service-context';

import './bootstrap.min.css';
import './app-wrap.scss';
import { StarshipDetails } from '../sw-components';


// Компонент "Обертка приложения" 
export default class App extends Component {
    state = {
        swapiService: new SwapiService(), // источник данных как состояние - удобно для смены источника или тестов
    };

    render() {

        return (
            <SwapiServiceProvider value={this.state.swapiService}>
                <Router>
                    <div className="section-outer">
                        <Header />
                        <RandomPlanet updateInterval={5000} />

                        <Switch>
                            <Route path="/people/:id?" component={PeoplePage} />
                            <Route path="/planet" component={PlanetPage} />
                            <Route path="/starship" exact component={StarshipPage} />
                            <Route path="/starship/:id" render={
                                ({ match }) => <StarshipDetails itemId={match.params.id} />
                            } />
                            <Redirect to='./planet' />
                            {/* <Route render={() => <h2>404 Page not found</h2>} /> */}
                        </Switch>
                    </div>
                </Router>
            </SwapiServiceProvider>
        );
    }
};
