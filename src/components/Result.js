import React, { Component } from 'react';
import './css/Result.css';

class Result extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="Result-div">
        {this.props.numberOne} + {this.props.numberTwo} = 12
      </div>
    );
  }
}

export default Result;
