import React from 'react';
import './parkpage.css';
import {  npsAPI, openWeather } from '../apis/urlConfig';
import PropTypes from 'prop-types';
import Loading from './Loading';
import CollapsibleSection from './CollapsibleSection';
import CollapsibleWeatherSection from './CollapsibleWeatherSection';
import CollapsibleHoursSection from './CollapsibleHoursSection';
import {addressFormater, parkOperatingHours} from './ParkPageHelperFunctions';

class ParkPage extends React.Component {
     state = {
            weatherLoading: true,
            parkLoading: true,
            parkData : [],
            currentWeather : [],
            parkCode: this.props.match.params.park_id,
            parkCity: ""
    }

    getWeatherInfo = async () => {
        const weatherData = await openWeather.get(`?q=${this.state.parkCity}&units=imperial&cnt=6&appid=106c09910d01f5014d283b4316d08756`)
        .then(res => res.data);
        this.setState({currentWeather : weatherData.list}, () => this.setState({weatherLoading : false}))
    }

    getParkInfo = async() => {
        const parkData = await npsAPI.get(`https://developer.nps.gov/api/v1/parks?parkCode=${this.state.parkCode}&api_key=ewWa3H0BgiOI4FkqiJBDDQZd1ldQM4VYkY45XXIJ`)
        .then(res => res.data.data)
        this.setState({parkData: parkData[0]}, () => this.setState({parkLoading: false,}))
    }

    getParkCity() {
        if (this.state.parkData) {
            this.setState({parkCity: this.state.parkData.addresses[0].city})
        }
    } 

    async componentDidMount() {
        await this.getParkInfo();
         this.getParkCity();
         this.getWeatherInfo();        
    }

    render() {
        const {weatherLoading, parkLoading, parkData, currentWeather} = this.state;
        return(
            <div className="park-container">   
                {(parkLoading || weatherLoading) ? <Loading /> : <>
                <div className="park-name">{parkData.fullName} <span className="designation"> - ({parkData.designation})</span> </div>
                <CollapsibleSection panelName="Description" panelInfo={parkData.description} />
                <CollapsibleHoursSection panelName="Park Hours" panelInfo={parkOperatingHours(parkData)} />
                <CollapsibleWeatherSection panelName="Weather" weatherData={currentWeather} />
                <CollapsibleSection panelName="Address" panelInfo={addressFormater(parkData)} />
                <CollapsibleSection panelName="Directions" panelInfo={parkData.directionsInfo} /> 
                </>}
           </div>
       )
    }
}

ParkPage.propTypes = {
    match : PropTypes.object.isRequired,
}

export default ParkPage;