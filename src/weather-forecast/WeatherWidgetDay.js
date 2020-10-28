import React from 'react';
import PropTypes from 'prop-types';
const {getWeatherTime, getWeatherImage} = require('./WeatherControllers') 

const WeatherWidgetDay = ({weatherStuff}) => {
    const image = require(`${getWeatherImage(weatherStuff)}`);
    const time = getWeatherTime(weatherStuff);

    return(
        <div className="three-hour-container">
            <h1 className="three-hour-time">{time}</h1>
            <img alt="weather" className="image-placeholder" src={image}/>
            <p className="three-hour-high">{`HIGH : ${weatherStuff.main.temp_max}`}</p>
            <p className="three-hour-temp">{`CURRENT : ${weatherStuff.main.temp}`}</p>
            <p className="three-hour-low">{`LOW : ${weatherStuff.main.temp_min}`}</p>
        </div>
    )
};

WeatherWidgetDay.propTypes = {
    weatherStuff: PropTypes.object.isRequired,
}

export default WeatherWidgetDay;