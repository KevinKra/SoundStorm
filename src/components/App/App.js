import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import AsideNav from "../AsideNav/AsideNav";
import "./App.css";
import MainPage from "../MainPage/MainPage";

class App extends Component {
  async componentDidMount() {
    const response = await fetch(
      "https://api.jamendo.com/v3.0/tracks/?client_id=d011137e&boost=popularity_month"
    );
    console.log(await response.json());
  }

  render() {
    return (
      <Fragment>
        <Route path="/" component={AsideNav} />
        <Route path="/" component={MainPage} />
      </Fragment>
    );
  }
}

export default App;
