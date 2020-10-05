import React from 'react';
import './App.css';
import {npsAPI} from './apis/nps';

// class App extends React.Component {
//   getParkInfo =  async () => {
//     const data = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=&stateCode=CA&api_key=${process.env.REACT_APP_API_KEY_NPS}`).then(res => res.data.data)
//     return data;
//   }

//   render(){ 
//     return(
//       <div>
//         <ol>
//           {this.getParkInfo().map(item => <li>{item.fullName}</li>)}
//         </ol>
//       </div>
//     )
//   }
// }

class App extends React.Component{
  getParkInfo = async () => {
    const data = await npsAPI.get(`/parks?parkCode=&stateCode=CA&api_key=${process.env.REACT_APP_API_KEY_NPS}`).then(res => res.data.data);
    console.log(data);
    return data;
  }
  
  render(){
    return(
      <div>
        <div>Hello World!</div>}
      </div>
      
    )
  }
};

export default App;
