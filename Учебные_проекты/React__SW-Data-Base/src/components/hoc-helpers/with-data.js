import React, { Component } from 'react';
import Spiner from '../spiner/spiner';
import ErrorIndicator from "../error-indicator";

// HOC для работы с полученнием данных
// Компонент-обертка - верет на себя некоторые обязанности/логику о которых не нужно заботить внутреннему компоненту
const withDataHOC = (ComponentView, getDataFunction) => {
    return class extends Component {
        state = {
            dataHOC: [],
            loading: false,
            error: false,
        };

        componentDidMount() {
            this.update() // обновляем состояниеЫ
        };

        componentDidUpdate(prevProps) {
            if (this.props.getDataFunction !== prevProps.getDataFunction) {
                this.update() // обновляем состояниеЫ
            }
        };

        update() { // Логика работы с сетью - [1]
            this.setState({
                loading: true,
                error: false,
            });

            getDataFunction()
                .then((dataHOC) => { // Вызываем переданные с сервера данные
                    this.setState({
                        dataHOC: dataHOC,
                        loading: false,
                    });
                })
                .catch(() => {
                    this.setState({
                        error: true,
                        loading: false,
                    })
                })
        };


        render() {
            const { dataHOC } = this.state // Деструктурируем в переменные

            if (this.state.loading) { // Логика отображения спиннера - [2]
                return <Spiner />
            };
            if (this.state.error) {
                return <ErrorIndicator />
            }

            return <ComponentView {...this.props} dataHOC={dataHOC} /> // передаем полученные свойства
        }
    }
};

export default withDataHOC;