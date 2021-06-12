import React from "react";
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (Wrapped) => {

    // swapiService - передается через CONTEXT API value={Provider}
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        return <Wrapped {...props} swapiService={swapiService} />
                    }
                }
            </SwapiServiceConsumer>
        )
    }
};

export default withSwapiService;