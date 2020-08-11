import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
// import Welcome from './components/Welcome'

class App extends Component{
  render(){
  return (
    <div className="App">
      <Greet name = "Krish"/>
      <Greet name = "divya"/>
      <Greet name = "sree"/>
      {/* <Welcome name = "Divya"/> */}
    </div>
  );
}

}

export default App;
