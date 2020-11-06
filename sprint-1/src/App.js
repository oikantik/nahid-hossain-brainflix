import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NextVideo from "./components/NextVideo/NextVideo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <NextVideo />
      </div>
    );
  }
}

export default App;
