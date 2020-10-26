import React from 'react';
import './parkpage.css';
import PropTypes from 'prop-types';
import CollapsibleSection from './CollapsibleSection';
import CollapsibleWeatherSection from './CollapsibleWeatherSection';
import CollapsibleHoursSection from './CollapsibleHoursSection';
import {addressFormater, parkOperatingHours} from './ParkPageHelperFunctions';

const ParkPage = ({weatherData, parkData, match, location}) => {
    return(
         <div className="park-container">   
            <div className="park-name">{parkData.fullName} <span className="designation"> - ({parkData.designation})</span> </div>
            <CollapsibleSection panelName="Description" panelInfo={parkData.description} />
            <CollapsibleHoursSection panelName="Park Hours" panelInfo={parkOperatingHours(parkData)} />
            <CollapsibleWeatherSection panelName="Weather" weatherData={weatherData} />
            <CollapsibleSection panelName="Address" panelInfo={addressFormater(parkData)} />
            <CollapsibleSection panelName="Directions" panelInfo={parkData.directionsInfo} />
            {console.log(match, location)}
        </div>
    )
};

ParkPage.propTypes = {
    weatherData : PropTypes.array.isRequired,
    parkData : PropTypes.object.isRequired
}

export default ParkPage;