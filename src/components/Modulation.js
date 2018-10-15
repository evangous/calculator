import React, { Component } from 'react';
import './css/Modulation.css';

class Modulation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberState: this.props.numberProp
    }
  }
  modulateNumber = (event) => {
    console.log(this.state.numberState)
    this.setState({
      numberState: eval(this.state.numberState+event.target.innerText)
    })
    // this.props.numberProp( eval(this.props.numberProp+event.target.innerText) )
    // this.props.handlerFromParant(event.target.innerText);
  }
  render() {
    return (
      <div className="Modulation-container">
        <div className="Modulation-minus">
          <button type="button" className="Modulation-button" onClick={this.modulateNumber}> -1 </button>
          <span>|</span>
          <button type="button" className="Modulation-button" onClick={this.modulateNumber}> -10 </button>
        </div>
        <div className="Modulation-input"> {this.state.numberState ? this.state.numberState : this.props.numberProp} </div>
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
