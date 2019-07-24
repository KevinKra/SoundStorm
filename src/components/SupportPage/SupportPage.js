import React, { Component } from "react";
import "./SupportPage.scss";

export default class SupportPage extends Component {
  render() {
    return (
      <section className="SupportPage">
        <section className="CardControls">
          <p>Card Controls</p>
        </section>
        <section className="ArtistBio">
          <header>
            <button>Drop Down Arrow</button>
          </header>
          <p>Artist Section</p>
        </section>
      </section>
    );
  }
}
