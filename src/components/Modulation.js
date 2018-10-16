import React, { Component } from 'react';
import './css/Modulation.css';

class Modulation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberState: 0
    }
    this.numberValue = Number(this.props.number)
  }
  modulateNumber = (event) => {
    const helpnum = eval(this.state.numberState+event.target.innerText)
    this.setState({
      numberState: helpnum
    })
    this.numberValue = Number(event.target.innerText) + Number(this.props.number)
    this.props.numberHandler( this.numberValue );
  }
  render() {
    this.numberValue = Number(this.props.number)
    return (
      <div className="Modulation-container">
        <div className="Modulation-minus">
          <button type="button" className="Modulation-button" onClick={this.modulateNumber}> -1 </button>
          <span>|</span>
          <button type="button" className="Modulation-button" onClick={this.modulateNumber}> -10 </button>
        </div>
        <input type="number" value={this.numberValue} className="Modulation-input" disabled />
        <div className="Modulation-plus">
          <button type="button" className="Modulation-button" onClick={this.modulateNumber}> +1 </button>
          <span>|</span>
          <button type="button" className="Modulation-button" onClick={this.modulateNumber}> +10 </button>
        </div>
      </div>
    );
  }

}

export default Modulation;
