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
    this.state = {
      numbers : [0, 0],
      operator: '+'
    }
  }
  initState(){
    this.setState({
      numbers : [0, 0],
      operator: '+'
    })
  }
  handleNumber(number,index){
    let numbers = this.state.numbers
    numbers[index] = number
    this.setState({numbers})
  }
  handleOperator(operator){
    this.setState({
      operator: operator
    })
  }
  render() {
    const inputs = this.state.numbers.map((number,index) =>
      <div className={"Label-input-container"} key={index}>
         Νο {index+1}
         <Input key={index} number={this.state.numbers[index]} numberHandler={(number) => this.handleNumber( number, index)} />
      </div>
    )
    const modulation = this.state.numbers.map((number,index) =>
      <Modulation number={this.state.numbers[index]} numberHandler={(number) => this.handleNumber( number, index)} key={index} />
    )
    const numbers = this.state.numbers
    const operator = this.state.operator
    return (
      <div className="App">
        <Header />
        <div className="Main-container">
          <div className="Inputs-container">
            {inputs}
          </div>
          <Operators operatorHandler={(operator) => this.handleOperator(operator)} />
          <div className="Modulation-container">
            {modulation}
          </div>
          <div className="Right-container">
            <Result numbers={numbers} operator={operator} />
            <button type="button" className="Clear-button" onClick={ () => this.initState() }> Clear All </button>
          </div>
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
4. map inputs | make it work for more than two numbers        OK
5. map modulations                                            OK
6. calc result with dynamic numbers length
7. add validation check for not-allowed calculations          OK
8. if negative add parenthesis                                OK
9. operators map                                              ΟΚ
10. if decimal, round in second digit                         OK
*/
