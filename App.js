import React, { Component } from "react";
import "./App.css";
import FetchRandomUser from "./components/FetchRandomUser";
import RefreshButton from "./components/RefreshButton";


class App extends Component {
  state = {
    visible: true
  };



  render() {
    return (
   <div className="App">
    
    <p> random user pull up </p>
        <RefreshButton />
        <FetchRandomUser />
       
       
        </div>
    );
  }
}

export default App;