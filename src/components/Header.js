import React from 'react';
import logo from '../logo.svg';
import './css/Header.css';


class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5 className="App-h5">React calculator</h5>
      </header>
    );
  }
}

export default Header;
