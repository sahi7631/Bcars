import React, { Component } from "react";
import "./App.css";
import Header from './container/Header';
import Search from './container/SearchContainer';
import WhyUs from './container/WhyUs';
import Work from './container/Works';
import Subscribe from './container/Subscribe';
import Footer from './container/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header></Header>
          <Search></Search>
        </header>
        <WhyUs></WhyUs>
        <Work></Work>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;