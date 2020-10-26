import React from 'react';
import './App.css';
import {  npsAPI, openWeather } from './apis/urlConfig';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import SearchPage from './all-parks/SearchPage';
import ParkPage from './park-page/ParkPage';
import FavoritePark from './favorite-parks/FavoritePark';

class App extends React.Component {
  state = {parkCity: "Santa Fe", 
           currentWeather : [],
           parkData: [], 
           selectedPark: {},
           stateCode: "MO"}

  // state = {stateCode: "AL",
  //          parkCode: "",
  //          parkCity: "",
  //          weatherData: [],
  //          parkData: [],
  //         }

  getWeatherInfo = async () => {
    const weatherData = await openWeather.get(`?q=${this.state.parkCity}&units=imperial&cnt=6&appid=106c09910d01f5014d283b4316d08756`)
    .then(res => res.data);
    this.setState({currentWeather : weatherData.list})
  }

  getParkInfo = async() => {
    const parkData = await npsAPI.get(`https://developer.nps.gov/api/v1/parks?stateCode=${this.state.stateCode}&api_key=ewWa3H0BgiOI4FkqiJBDDQZd1ldQM4VYkY45XXIJ`)
    .then(res => res.data.data)
    this.setState({parkData: parkData})
    //remove the second part once picture clicking working
    this.setState({selectedPark: parkData[0]})
  }

  updateSelectedStateCode = (newStateCode) => {
    this.setState({stateCode : newStateCode}, () => this.getParkInfo());
  }

  selectParkToView = (code) => {
    this.setState({selectedPark: this.state.parkData[code]}, () => console.log(this.state.selectedPark))
  }

  selectCity = (city) => {
    this.setState({selectCity : city}, () => console.log("This is the current selected city: " + this.state.selectedPark))
  }

  componentDidMount() {
    // this.getParkInfo()
    this.getParkInfo();
    this.getWeatherInfo()
  }

  render(){ 
    return(
      <div>
        <Router>
          <Navbar />
          {/* <Route path="/" render={(props) => <Navbar {...props} />}/> */}
            <Switch>
              <Route path="/" exact render={() => <SearchPage 
              parkData={this.state.parkData} 
              currentStateCode={this.state.stateCode}
              updateSelectedStateCode={this.updateSelectedStateCode}
              selectPark={this.selectParkToView}
              />} />
              <Route path="/park/:park-id" render={(props) => <ParkPage {...props}
                weatherData={this.state.currentWeather} 
                parkData={this.state.selectedPark}
                />} />
              <Route path="/favorites" render={() => <FavoritePark />} />
            </Switch>
        </Router>
      </div>
    )
  }
}

export default App;