import React, { Component } from 'react';
import './css/Executors.css';

class Input extends React.Component {
  render() {
    return (
      <div className="Executors-div">
        <button type="button" className="Executor-button"> + </button>|
        <button type="button" className="Executor-button"> - </button>|
        <button type="button" className="Executor-button"> &divide; </button>|
        <button type="button" className="Executor-button"> * </button>
      </div>
    );
  }
}

export default Input;
