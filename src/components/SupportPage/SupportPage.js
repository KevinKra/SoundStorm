import React, { Component } from "react";
import "./SupportPage.scss";
import AudioPlayer from "../../containers/AudioPlayer/AudioPlayer";
import { connect } from "react-redux";

class SupportPage extends Component {
  handleStyles = () => {
    if (Object.keys(this.props.currentSong).length === 0) {
      return {
        transform: "translateY(100vh)",
        color: "red"
      };
    }
    return {
      transform: "translateY(90vh)",
      color: "blue"
    };
  };

  render() {
    const hidePage = {
      transform: "translateY(100vh)",
      color: "red"
    };

    return (
      <section className="SupportPage" style={this.handleStyles()}>
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

const mapStateToProps = store => ({
  currentSong: store.currentSong
});

export default connect(mapStateToProps)(SupportPage);
