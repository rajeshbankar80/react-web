import React, { Component } from 'react';
import './App.css';
import MainRoute from './routes/publicRoutes';
import { Link } from 'react-router-dom';
import HeaderComponent from './components/Header/HeaderComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/players'>Players</Link></li>
          </ul>
        </nav>
        <HeaderComponent/>
        {/* Main Route which can replace components */}
        <MainRoute />
      </div>
    );
  }
}

export default App;
