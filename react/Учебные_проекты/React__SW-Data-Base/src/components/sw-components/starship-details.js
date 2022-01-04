import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from "../hoc-helpers/";

const StarshipDetails = ({ itemId, swapiService }) => {
    return (
        <ItemDetails
            getData={swapiService.getStarships}
            getImageUrl={swapiService.getStarshipImage}
            itemId={itemId}>

            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costCredits" label="Credits" />

        </ItemDetails>

    )
};

export default withSwapiService(StarshipDetails);