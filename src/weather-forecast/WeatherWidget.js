import React from 'react';
import WeatherWidgetDay from './WeatherWidgetDay'
import './weatherwidget.css'

const WeatherWidget = () => {
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>City Name</h1>
            <div className="days-container">
                <WeatherWidgetDay />
                <WeatherWidgetDay />
                <WeatherWidgetDay />
                <WeatherWidgetDay />
                <WeatherWidgetDay />
            </div>
        </div>
    )
};

export default WeatherWidget;