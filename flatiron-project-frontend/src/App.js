import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Menu from './components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Menu/>
      <div className="Home-page-greeting">
        <span className="Logo">Flatiron Projects</span>
        <br/>
        <span>A platform for innovation</span>
      </div>
      <br/>
      <button>Login</button>
    </div>
  );
}

export default App;
