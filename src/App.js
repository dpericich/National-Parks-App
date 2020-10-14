import React from 'react';
import './App.css';
import {  npsAPI, openWeather } from './apis/urlConfig';
import WeatherWidget from './weather-forecast/WeatherWidget'

class App extends React.Component {
  state = {city: "Austin", darkMode : false, currentWeather : []}
  getParkInfo =  async () => {
    const data = await npsAPI.get(`parks?parkCode=acad&api_key=${process.env.REACT_APP_API_KEY_NPS}`).then(res => res.data)
    console.log(data)
  }

  getWeatherInfo = async () => {
    const weatherData = await openWeather.get(`?q=Austin&units=imperial&cnt=5&appid=106c09910d01f5014d283b4316d08756`)
    .then(res => res.data);
    this.setState({currentWeather : weatherData.list})
    console.log(weatherData.list)
  }


  componentDidMount() {
    // this.getParkInfo()
    this.getWeatherInfo()
  }

  render(){ 
    return(
      <div>
          <WeatherWidget weatherData={this.state.currentWeather}/>
      </div>
    )
  }
}

// class App extends React.Component{
//   getParkInfdafdsfo = async () => {
//     const data = await npsAPI.get(`/parks?&stateCode=CA&api_key=${process.env.REACT_APP_API_KEY_NPS}`).then(res => res.data.data);
//     return data;
//   }

//   getParkInfo = async () => {
//     const data = await npsAPI.get(`/parks&stateCode=CA&api_key=${process.env.REACT_APP_API_KEY_NPS}`).then(res => res.data);
//     console.log(data)
//   }

  
//   render(){
//     this.getParkInfo()
//     return(
//       <div>
//         <div>Hello World!</div>
//       </div>
      
//     )
//   }
// };

export default App;
