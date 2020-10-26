import React from 'react';
import WeatherWidgetDay from './WeatherWidgetDay'
import './weatherwidget.css'

const WeatherWidget = ({weatherData}) => {
    return(
        <div>
            <div className="days-container">
                {weatherData.map((threeHour, index) => (
                    <WeatherWidgetDay key={index} weatherStuff={threeHour}/>
                ))}
            </div>
        </div>
    )
};

export default WeatherWidget;