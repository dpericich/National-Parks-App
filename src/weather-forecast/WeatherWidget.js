import React from 'react';
import PropTypes from 'prop-types';
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

WeatherWidget.propTypes = {
    weatherData: PropTypes.array.isRequired,
}

export default WeatherWidget;