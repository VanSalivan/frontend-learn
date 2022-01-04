import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from "../hoc-helpers/";

const PersonDetails = ({ itemId, swapiService }) => {
    return (
        <ItemDetails
            getData={swapiService.getPerson}
            getImageUrl={swapiService.getPersonImage}
            itemId={itemId}>

            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />

        </ItemDetails>
    )
};

export default withSwapiService(PersonDetails);