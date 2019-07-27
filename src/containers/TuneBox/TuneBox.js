import React, { Component } from "react";
import Radium from "radium";
import "./TuneBox.scss";

class TuneBox extends Component {
  state = {
    activeHover: false
  };

  handleMouseEnter = () => {
    this.setState({ activeHover: true });
  };

  handleMouseLeave = () => {
    this.setState({ activeHover: false });
  };

  render() {
    const styles = {
      base: {
        height: "300px",
        width: `${this.props.width}`,
        color: "white"
      }
    };
    const topImage = {
      position: "relative",
      zIndex: "2",
      backgroundImage: `url(${this.props.topImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "80%",
      width: "100%",
      transition: "0.5s transform ease-in-out",
      transform: `translateY(${this.state.activeHover ? "-100%" : "0%"})`
    };
    const bottomImage = {
      position: "absolute",
      zIndex: "1",
      backgroundImage: `url(${this.props.bottomImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "80%",
      width: "100%",
      transition: "0.5s transform ease-in-out"
      // transform: `translateY(${this.state.activeHover ? "-100%" : "0%"})`
    };

    return (
      <section
        className="TuneBox"
        style={[styles.base]}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="image" style={topImage}>
          <h2 className="card-title">{`${this.props.primaryTitle}`}</h2>
        </div>
        <div className="image" style={bottomImage}>
          <p className="card-title playlist-title">{`${
            this.props.playlistTitle
          }`}</p>
        </div>
        <section className="card-body">
          <div>
            <h3>{this.props.jist}</h3>
            <p>Songs in playlist: {this.props.playlistLength}</p>
          </div>
          <i className="fas fa-lg fa-chevron-circle-down" />
        </section>
      </section>
    );
  }
}

export default Radium(TuneBox);
