import React, { Component } from "react";
// import axios from 'axios';

// Components
import SmurfBtn from './components/SmurfBtn';
import SmurfsList from './components/SmurfsList';
import SmurfForm from './components/SmurfForm';

// Styles
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfBtn />
        <SmurfForm />
        <SmurfsList />
      </div>
    );
  }
}

export default App;
