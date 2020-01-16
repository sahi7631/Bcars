import React, { Component } from "react";
import "./App.css";
import Search from './container/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Becar </h1>
          <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#myPage">Logo</a>
              </div>
              <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="#myPage">HOME</a></li>
                  <li><a href="#band">ABOUT</a></li>
                  <li><a href="#tour">RENT YOUR CAR</a></li>
                  <li><a href="#contact">CONTACT</a></li>
                  <li><a href="#contact">LOGIN</a></li>
                  <li><a href="#contact">SIGNUP</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <Search></Search>
        </header>
      </div>
    );
  }
}

export default App;