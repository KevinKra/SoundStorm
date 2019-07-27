import React, { Component } from "react";
import "./MainPage.scss";
import { PrimaryTracks } from "../PrimaryTracks/PrimaryTracks";
import SupportContent from "../SupportContent/SupportContent";
import SupportPage from "../SupportPage/SupportPage";
import Header from "../Header/Header";

export default class MainPage extends Component {
  render() {
    return (
      <section className="MainPage">
        <Header />
        <PrimaryTracks />
        <SupportContent />
        <SupportPage />
        <div className="audioBar-buffer" />
      </section>
    );
  }
}
