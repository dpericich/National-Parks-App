import React from 'react';
import {getWeatherTime, getWeatherImage} from './WeatherControllers'

const WeatherWidgetDay = ({weatherStuff}) => {
    return(
        <div className="three-hour-container">
            <h1 className="three-hour-time">{getWeatherTime(weatherStuff)}</h1>
            <img alt="weather" className="image-placeholder" src={getWeatherImage(weatherStuff)}/>
            <p className="three-hour-high">{`HIGH : ${weatherStuff.main.temp_max}`}</p>
            <p className="three-hour-temp">{`CURRENT TEMP : ${weatherStuff.main.temp}`}</p>
            <p className="three-hour-low">{`LOW : ${weatherStuff.main.temp_min}`}</p>
        </div>
    )
};


export default WeatherWidgetDay;