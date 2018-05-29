import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Password from "./Password";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Password password={this.state.password} check={this.props.check} />
      </div>
    );
  }
}

export default App;
