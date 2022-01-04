import React from 'react';
import { withRouter } from 'react-router';
import { StarshipList } from '../sw-components';

const StarshipPage = (props) => {
    return (
        <StarshipList onItemSelected={(itemId) => props.history.push(itemId)}>
            {(element) => `${element.name} `}
        </StarshipList>
    )
};

export default withRouter(StarshipPage);