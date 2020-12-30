import React, { Component } from 'react';
import HeaderComp from "./AppHeaderComp"
import AppMainComp from "./AppMainComp"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page">
        
        <HeaderComp></HeaderComp>
        <AppMainComp></AppMainComp>
        
      </div>
    );
  }
}

export default App;
