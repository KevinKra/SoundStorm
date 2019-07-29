import React, { Component } from "react";
import "./MainPage.scss";
import { PrimaryTracks } from "../PrimaryTracks/PrimaryTracks";
import SupportContent from "../SupportContent/SupportContent";
import SupportPage from "../SupportPage/SupportPage";
import Header from "../../containers/Header/Header";
import HeroImage from "../HeroImage/HeroImage";

export default class MainPage extends Component {
  render() {
    return (
      <section className="MainPage">
        <Header />
        <HeroImage
          height="325px"
          width="90vw"
          image={
            "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          }
        />
        <PrimaryTracks />
        <SupportContent />
        <SupportPage />
        <div className="audioBar-buffer" />
      </section>
    );
  }
}
