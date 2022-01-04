import React from 'react';
import { withRouter } from 'react-router';
import { PersonList, PersonDetails } from '../sw-components';
import Row from '../row';

const PeoplePage = (props) => {
    return (
        <Row
            leftElement={
                <PersonList onItemSelected={(id) => { props.history.push(id) }} >
                    {(element) => `${element.name} `}
                </PersonList>
            }
            rightElement={<PersonDetails itemId={props.match.params.id} />}
        />
    )
};

export default withRouter(PeoplePage);