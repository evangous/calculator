import React, { Component } from 'react';
import './css/Modulation.css';

class Modulation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: this.props.number
    }
  }
  modulateNumber = (event) => {
    console.log(this.state.number)
    this.setState({
      number: eval(this.state.number+event.target.innerText)
    })
    // this.props.number = eval(this.props.number+event.target.innerText)
  }
  render() {
    return (
      <div className="Modulation-container">
        <div className="Modulation-minus">
          <button type="button" className="Modulation-button" onClick={this.modulateNumber}> -1 </button>
          <span>|</span>
          <button type="button" className="Modulation-button" onClick={this.modulateNumber}> -10 </button>
        </div>
        <div className="Modulation-input"> {this.state.number ? this.state.number : this.props.number} </div>
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
