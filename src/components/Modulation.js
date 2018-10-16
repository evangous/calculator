import React, { Component } from 'react';
import './css/Modulation.css';

class Modulation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberState: this.props.numberProp
    }
    console.log(this.state.number);
    console.log('PROPS',props);
    console.log(this.props.number);
    // this.handleChange = this.handleChange.bind(this)
  }
  modulateNumber = (event) => {
<<<<<<< HEAD
    this.setState({
      number: eval(this.props.number+event.target.value)
    })
    this.props.number( eval(this.props.number+event.target.value) );
=======
    console.log(this.state.numberState)
    this.setState({
      numberState: eval(this.state.numberState+event.target.innerText)
    })
    // this.props.numberProp( eval(this.props.numberProp+event.target.innerText) )
    // this.props.handlerFromParant(event.target.innerText);
>>>>>>> df8b6102d7bb737833b8e64ae63458277433cb98
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
<<<<<<< HEAD
        <div className="Modulation-input"> { this.state.number ? this.state.number : this.state.number} </div>
=======
        <div className="Modulation-input"> {this.state.numberState ? this.state.numberState : this.props.numberProp} </div>
>>>>>>> df8b6102d7bb737833b8e64ae63458277433cb98
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
