import React, { Component } from 'react';
import './css/App.css';

import Header from './Header';
import Input from './Input';
import Operators from './Operators';
import Result from './Result';
import Modulation from './Modulation';


class App extends Component {
  constructor() {
    super()
    this.handleNumberOne = this.handleNumberOne.bind(this)
    this.handleNumberTwo = this.handleNumberTwo.bind(this)
    this.handleOperator = this.handleOperator.bind(this)
    this.state = {
      numberOne : 0,
      numberTwo : 0,
      operator: '+'
    }
  }
  initState(){
    console.log(this.state);
    this.setState({
      numberOne: 0,
      numberTwo: 0,
      operator: '+'
    })
    // this.handleNumberOne = 0
    // this.handleNumberTwo = 0
  }
  handleNumberOne(num) {
    this.setState({
      numberOne: num
    })
  }
  handleNumberTwo(num) {
    this.setState({
      numberTwo: num
    })
  }
  handleOperator(data) {
    this.setState({
      operator: data
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Top-container">
          <div className="Label-input-container">
            Νο 1
            <Input numberHandler={this.handleNumberOne} />
          </div>
          <Operators operatorHandler={this.handleOperator} />
          <div className="Label-input-container">
            Νο 2
            <Input numberHandler={this.handleNumberTwo} />
          </div>
        </div>
        <div className="Middle-container">
          <Result numberOne={this.state.numberOne} numberTwo={this.state.numberTwo} operator={this.state.operator} />
        </div>
        <div className="Bottom-container">
          <Modulation numberProp={this.state.numberOne} handlerFromParant />
          <button type="button" className="Clear-button" onClick={ () => this.initState() }> Clear All </button>
          <Modulation numberProp={this.state.numberTwo} handlerFromParant />
        </div>
      </div>
    );
  }
}

export default App;
