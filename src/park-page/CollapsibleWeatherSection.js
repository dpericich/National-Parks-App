import React, {useState} from 'react';
import Proptypes from 'prop-types';
import WeatherWidget from '../weather-forecast/WeatherWidget';

const CollapsibleWeatherSection = ({panelName, weatherData}) => {
    const [panelOpenStatus, setPanelOpenStatus] = useState(false)

    let togglePanel = () => {
        setPanelOpenStatus(!panelOpenStatus);
    }

    let displayContent = () => {
        return panelOpenStatus ? "panel-visible" : "panel-hidden";
    }
    return(
        <>
            <button className="panel-btn" onClick={togglePanel}>{panelName}</button>
            <div className={`collapsible-panel ${displayContent()}`}>
                <WeatherWidget weatherData={weatherData} />
            </div>

        </>
    )
};

CollapsibleWeatherSection.propTypes = {
    panelName: Proptypes.string.isRequired,
    weatherData : Proptypes.array.isRequired,
}

export default CollapsibleWeatherSection;