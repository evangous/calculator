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
    this.setState({
      numberOne: 0,
      numberTwo: 0,
      operator: '+'
    })
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
            <Input number={this.state.numberOne} numberHandler={this.handleNumberOne} />
          </div>
          <Operators operatorHandler={this.handleOperator} />
          <div className="Label-input-container">
            Νο 2
            <Input number={this.state.numberTwo} numberHandler={this.handleNumberTwo} />
          </div>
        </div>
        <div className="Middle-container">
          <Result numberOne={this.state.numberOne} numberTwo={this.state.numberTwo} operator={this.state.operator} />
        </div>
        <div className="Bottom-container">
          <Modulation number={this.state.numberOne} numberHandler={this.handleNumberOne} />
          <button type="button" className="Clear-button" onClick={ () => this.initState() }> Clear All </button>
          <Modulation number={this.state.numberTwo} numberHandler={this.handleNumberTwo} />
        </div>
      </div>
    );
  }
}

export default App;


/*
1. on change input number reset +-1| +-10                     OK
2. on change numbers change input number                      OK
3. on clear reset input numbers                               OK
4. map inputs | make it work for more than two numbers
5. map modulations
6. add validation check for not-allowed calculations
7. if negative add parenthesis                                OK
8. operators map with | but not in the end
*/
