import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar, Sidebar, Content } from "./index";
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <Content />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
