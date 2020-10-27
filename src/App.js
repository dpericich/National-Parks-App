import React from 'react';
import './App.css';
import {  npsAPI } from './apis/urlConfig';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import SearchPage from './all-parks/SearchPage';
import ParkPage from './park-page/ParkPage';
import FavoritePark from './favorite-parks/FavoritePark';

class App extends React.Component {
  state = {
           parkData: [], 
           stateCode: "AL"
          }

  getParkInfo = async() => {
    const parkData = await npsAPI.get(`https://developer.nps.gov/api/v1/parks?stateCode=${this.state.stateCode}&api_key=ewWa3H0BgiOI4FkqiJBDDQZd1ldQM4VYkY45XXIJ`)
    .then(res => res.data.data)
    this.setState({parkData: parkData})
  }

  updateSelectedStateCode = (newStateCode) => {
    this.setState({stateCode : newStateCode}, () => this.getParkInfo());
  }

  selectParkToView = (code) => {
    this.setState({selectedPark: this.state.parkData[code]})
  }

  componentDidMount()  {
    this.getParkInfo();
  }

  render(){ 
    return(
      <div>
        <Router>
          <Navbar stateCode={this.state.stateCode}/>
            <Switch>
              <Route path="/park/:park_id" render={(props) => <ParkPage {...props}
              weatherData={this.state.currentWeather} 
              parkData={this.state.selectedPark}
              />} />
              <Route path="/about" exact render={() => <FavoritePark />} /> 
              <Route path="/:state" render={() => <SearchPage 
              parkData={this.state.parkData} 
              currentStateCode={this.state.stateCode}
              updateSelectedStateCode={this.updateSelectedStateCode}
              selectPark={this.selectParkToView}
              />} />
              <Route path="/" exact render={() => <SearchPage 
              parkData={this.state.parkData} 
              currentStateCode={this.state.stateCode}
              updateSelectedStateCode={this.updateSelectedStateCode}
              selectPark={this.selectParkToView}
              />} />
            </Switch>
        </Router>
      </div>
    )
  }
}

export default App;