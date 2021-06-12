import React, { Component } from 'react';
import { PlanetList, PlanetDetails } from '../sw-components';
import Row from '../row';

export default class PlanetPage extends Component {

    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem: selectedItem })
    };
    render() {
        return (
            <Row
                leftElement={
                    <PlanetList onItemSelected={this.onItemSelected} >
                        {(element) => `${element.name}`}
                    </PlanetList>
                }
                rightElement={<PlanetDetails itemId={this.state.selectedItem} />}
            />
        )
    }
};