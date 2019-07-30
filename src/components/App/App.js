import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import AsideNav from "../../containers/AsideNav/AsideNav";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import MainPage from "../MainPage/MainPage";
import ArtistPage from "../ArtistPage/ArtistPage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" component={AsideNav} />
        <Route exact path="/" component={HomePage} />
        <Route path="/browse" component={MainPage} />
        <Route path="/artist" component={ArtistPage} />
      </Fragment>
    );
  }
}

export default App;
