import React, { Component } from 'react';
import './css/App.css';

import Header from './Header';
import Input from './Input';
import Executors from './Executors';
import Result from './Result';
import Modulation from './Modulation';
import Clear from './Clear';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Top-container">
          <div className="Label-input-container">
            Νο 1 <Input />
          </div>
          <div className="Executors-container">
          <Executors />
          </div>
          <div className="Label-input-container">
            Νο 2 <Input />
          </div>
        </div>
        <div className="Middle-container">
          <div className="Result-container">
            Result <Result />
          </div>
        </div>
        <div className="Bottom-container">
          <Modulation />
          <Clear />
          <Modulation />
        </div>
      </div>
    );
  }
}

export default App;
