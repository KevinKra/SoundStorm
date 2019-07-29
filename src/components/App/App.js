import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import AsideNav from "../../containers/AsideNav/AsideNav";
import "./App.css";
import MainPage from "../MainPage/MainPage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" component={AsideNav} />
        <Route path="/browse" component={MainPage} />
      </Fragment>
    );
  }
}

export default App;
