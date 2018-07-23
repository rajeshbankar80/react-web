import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainRoute from './routes/publicRoutes';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        {/* Main Route which can replace components */}
        <MainRoute />
      </div>
    );
  }
}

export default App;
