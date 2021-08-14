import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import { nanoid } from 'nanoid';
import './App.css';
import TemperatureCalculator from './component/TemperatureCalculator';
// json local data file link 
// const url = './JsonData/user_data.json';


//App Component........
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <TemperatureCalculator/>
      </div>
    )
  }
}


