import React, { Component } from 'react';
import './css/App.css';

import Header from './Header';
import Input from './Input';
import Executors from './Executors';
import Result from './Result';
import Modulation from './Modulation';
import Clear from './Clear';


class App extends Component {
  constructor() {
    super()
    this.handleNumberOne = this.handleNumberOne.bind(this)
    this.handleNumberTwo = this.handleNumberTwo.bind(this)
    this.state = {
      numberOne: '',
      numberTwo: ''
    }
  }
  handleNumberOne(data) {
    this.setState({
      numberOne: data
    })
  }
  handleNumberTwo(data) {
    this.setState({
      numberTwo: data
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Top-container">
          <div className="Label-input-container">
            Νο 1 <Input numberHandler={this.handleNumberOne} />
          </div>
          <div className="Executors-container">
            <Executors />
          </div>
          <div className="Label-input-container">
            Νο 2 <Input numberHandler={this.handleNumberTwo} />
          </div>
        </div>
        <div className="Middle-container">
          <div className="Result-container">
            Result
            <Result numberOne={this.state.numberOne} numberTwo={this.state.numberTwo} />
          </div>
        </div>
        <div className="Bottom-container">
          <Modulation number={this.state.numberOne} />
          <Clear />
          <Modulation number={this.state.numberTwo} />
        </div>
      </div>
    );
  }
}

export default App;
