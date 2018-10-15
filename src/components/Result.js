import React, { Component } from 'react';
import './css/Result.css';

class Result extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const numberOne = this.props.numberOne
    const numberTwo = this.props.numberTwo
    const operator = this.props.operator
    const result = eval( String(this.props.numberOne+' '+this.props.operator+' '+this.props.numberTwo) )
    return (
      <div className="Result-container">
        Result
        <div className="Result-div">
          {numberOne} {operator} {numberTwo} = {result}
        </div>
      </div>
    );
  }
}

export default Result;
