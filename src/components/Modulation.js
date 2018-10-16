import React, { Component } from 'react';
import './css/Modulation.css';

class Modulation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: this.props.number
    }
    console.log(this.state.number);
    console.log('PROPS',props);
    console.log(this.props.number);
    // this.handleChange = this.handleChange.bind(this)
  }
  modulateNumber = (event) => {
    this.setState({
      number: eval(this.props.number+event.target.value)
    })
    this.props.number( eval(this.props.number+event.target.value) );
  }
  // handleChange(event) {
  //   this.props.numberHandler( eval(this.props.number+event.target.value) );
  // }
  render() {
    return (
      <div className="Modulation-container">
        <div className="Modulation-minus">
          <button type="button" className="Modulation-button" onClick={this.modulateNumber}> -1 </button>
          <span>|</span>
          <button type="button" className="Modulation-button" onClick={this.modulateNumber}> -10 </button>
        </div>
        <div className="Modulation-input"> { this.state.number ? this.state.number : this.state.number} </div>
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
