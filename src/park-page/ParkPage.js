import React from 'react';
import './parkpage.css';
import PropTypes from 'prop-types';
import CollapsibleSection from './CollapsibleSection';
import CollapsibleWeatherSection from './CollapsibleWeatherSection';

const ParkPage = ({weatherData, parkData}) => {
    return(
        <div className="park-container">
            {console.log(parkData)}
            
            <div className="park-name">{parkData.fullName} <span className="designation"> - ({parkData.designation})</span> </div>
            <CollapsibleSection panelName="Description" panelInfo={parkData.description} />

            <button className="panel-btn">Hours</button>
                <div className="collapsible-panel">
                    <p>Monday: </p>
                    <p>Tuesday: </p>
                    <p>Wednesday: </p>
                    <p>Thursday: </p>
                    <p>Friday: </p>
                    <p>Saturday: </p>
                    <p>Sunday: </p>
                    {/* {parkData.operatingHours} */}
                    {console.log(parkData.operatingHours, parkData.operatingHours[0])}
                    {/* {(!parkData.operatingHours) : console.log(} */}
                    {/* {console.log(Object.entries(parkData.operatingHours))} */}
                    
                </div>
            <CollapsibleWeatherSection panelName="Weather" weatherData={weatherData} />
            <CollapsibleSection panelName="Address" panelInfo="I am the Misc Info 1" />
            <CollapsibleSection panelName="Directions" panelInfo={parkData.directionsInfo} />
        </div>
    )
};


export default ParkPage;