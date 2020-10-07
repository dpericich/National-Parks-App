import React from 'react';

const WeatherWidgetDay = () => {
    return(
        <div className="three-hour-container">
            <h1 className="three-hour-time">03:00</h1>
            <img alt="weather" className="image-placeholder"/>
            <p className="three-hour-high">High</p>
            <p className="three-hour-temp">Current Temp</p>
            <p className="three-hour-low">Low</p>

        </div>
    )
};

export default WeatherWidgetDay;