import React, { Component } from 'react';
import './css/Input.css';

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      number: event.target.value
    })
    this.props.numberHandler(event.target.value);
  }
  render() {
    return (
      <input type="number" className="Number-input" value={this.state.number} onChange={this.handleChange} />
    );
  }

}

export default Input;
