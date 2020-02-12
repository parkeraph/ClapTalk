import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap'
import Clapper from './Clapper.js';
import './App.css';

function App() {
  return (
    <div id="AppWrapper">  
      <Navbar bg="dark">
        <Navbar.Brand>
          <h4 id="title">Clap Converter</h4>
        </Navbar.Brand>
      </Navbar>
      <Clapper />
    </div>  
  )
}

export default App;
