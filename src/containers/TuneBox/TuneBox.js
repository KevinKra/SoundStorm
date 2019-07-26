import React, { Component } from "react";
import "./TuneBox.scss";

export default class TuneBox extends Component {
  render() {
    const passedStyles = {
      height: "300px",
      width: "275px",
      color: "white"
    };
    const imageStyles = {
      position: "relative",
      // zIndex: "1",
      backgroundImage: `url(${this.props.image})`,
      backgroundSize: "cover",
      height: "80%",
      width: "100%"
    };

    return (
      <section className="TuneBox" style={passedStyles}>
        <div className="image" style={imageStyles}>
          <h2 className="card-title">{`${this.props.title}`}</h2>
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
