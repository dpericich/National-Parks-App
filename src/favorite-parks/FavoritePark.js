import React from 'react';
import './favorite-park.css';

const FavoritePark = () => {
    return(
        <div className="favorites-container">
            <h1>About this App</h1>
            <div>This app uses multiple APIs to create a companion app for anyone interested in hiking, camping and exploring
                the beauty our National Parks system has to offer. It uses React, React Routers, Axios, the Weather API, the NPS API and 
                many more tools to create a one stop shop for all the information you may need to have a successful park visit. Use the 
                search feature to find sites by state. Click on a site to pull up descriptions, directions and an 18 hour weather forecast.
            </div>
        </div>
    )
}

export default FavoritePark;