import React, { Component } from 'react';
import './css/Operators.css';

class Input extends React.Component {
  selectOperator(operator){
    console.log(operator)
    this.props.operatorHandler(operator);
  }
  render() {
    const operators = [
      { 'text' : '+ |', 'value' : '+' },
      { 'text' : '- |', 'value' : '-' },
      { 'text' : '÷ |', 'value' : '/' },
      { 'text' : '*', 'value' : '*' }
    ];
    const operatorsdiv = operators.map((operator) =>
      <button type="button" className="Operator-button" onClick={ () => this.selectOperator(operator.value) }> {operator.text} </button>
    )
    return (
      <div className="Operators-container">
        <div className="Operators-div">
          {operatorsdiv}
        </div>
      </div>
    );
  }
}

export default Input;
