import React, {useState} from 'react';
import WeatherWidget from '../weather-forecast/WeatherWidget';

const CollapsibleWeatherSection = ({panelName, weatherData}) => {
    const [panelOpenStatus, setPanelOpenStatus] = useState(true)

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

export default CollapsibleWeatherSection;