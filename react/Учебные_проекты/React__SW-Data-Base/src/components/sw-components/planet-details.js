import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from "../hoc-helpers/";

const PlanetDetails = ({ itemId, swapiService }) => {
    return (
        <ItemDetails
            getData={swapiService.getPlanet}
            getImageUrl={swapiService.getPlanetImage}
            itemId={itemId}>

            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />

        </ItemDetails>
    )
};


export default withSwapiService(PlanetDetails);