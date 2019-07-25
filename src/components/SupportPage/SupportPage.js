import React, { Component } from "react";
import "./SupportPage.scss";
import AudioPlayer from "../../containers/AudioPlayer/AudioPlayer";

class SupportPage extends Component {
  render() {
    return (
      <section className="SupportPage">
        <section className="CardControls">
          <AudioPlayer />
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

export default SupportPage;
