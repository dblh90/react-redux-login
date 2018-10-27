import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg";
import "./App.css";
import LoginComponent from "./components/LoginComponent";
import { Provider } from "react-redux";
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <LoginComponent />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
