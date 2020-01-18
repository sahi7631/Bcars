import React, { Component } from "react";
import "./App.css";
import Header from './container/Header';
import Search from './container/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header></Header>
          <Search></Search>
        </header>
      </div>
    );
  }
}

export default App;