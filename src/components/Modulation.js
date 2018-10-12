import React, { Component } from 'react';
import './css/Modulation.css';

class Modulation extends React.Component {
  render() {
    return (
      <div className="Modulation-container">
        <div className="Modulation-minus">
          <button type="button" className="Modulation-button"> -1 </button>
          <span>|</span>
          <button type="button" className="Modulation-button"> -10 </button>
        </div>
        <input type="number" className="Modulation-input" value="5" />
        <div className="Modulation-plus">
          <button type="button" className="Modulation-button"> +1 </button>
          <span>|</span>
          <button type="button" className="Modulation-button"> +10 </button>
        </div>
      </div>
    );
  }

}


export default Modulation;
