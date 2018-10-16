import React, { Component } from 'react';
import './css/Input.css';

class Input extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.number);
    this.state = {
      number: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      number: event.target.value
    })
    this.numberValue = Number(event.target.value)
    this.props.numberHandler(event.target.value);
  }
  render() {
    this.numberValue = Number(this.props.number)
    return (
      <input type="number" className="Number-input" value={this.numberValue} onChange={this.handleChange} />
    );
  }

}

export default Input;
