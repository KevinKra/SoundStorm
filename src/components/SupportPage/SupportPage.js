import React, { Component } from "react";
import "./SupportPage.scss";
import AudioPlayer from "../../containers/AudioPlayer/AudioPlayer";
import { connect } from "react-redux";

class SupportPage extends Component {
  state = {
    displayFullPage: false
  };

  handleStyles = () => {
    console.log("fire");
    if (
      Object.keys(this.props.currentSong).length !== 0 &&
      this.state.displayFullPage === true
    ) {
      return {
        transform: "translateY(70vh)",
        color: "red"
      };
    }
    if (Object.keys(this.props.currentSong).length === 0) {
      return {
        transform: "translateY(100vh)",
        color: "green"
      };
    }
    return {
      transform: "translateY(90vh)",
      color: "blue"
    };
  };

  toggleExpand = () => {
    const toggle = this.state.displayFullPage;
    this.setState({ displayFullPage: !toggle });
  };

  render() {
    return (
      <section className="SupportPage" style={this.handleStyles()}>
        <section className="CardControls">
          <AudioPlayer />
        </section>
        <section className="ArtistBio">
          <header>
            <button onClick={this.toggleExpand}>Drop Down Arrow</button>
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
