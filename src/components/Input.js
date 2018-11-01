import React from 'react';
import './css/Input.css';

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }
  handleChange(event) {
    this.numberValue = Number(event.target.value)
    this.setState({
      number: this.numberValue
    })
    this.props.numberHandler(this.numberValue);
  }
  render() {
    this.numberValue = Number(this.props.number)
    return (
      <input type="number" className="Number-input" value={this.numberValue} onChange={ (event) => this.handleChange(event) } />
    );
  }

}

export default Input;
