import React from "react";
import { connect } from "react-redux";
import "./AudioPlayer.scss";

const AudioPlayer = props => {
  return (
    <section className="AudioPlayer">
      <i className="fas fa-step-backward" />
      <i className="fas fa-play" />
      <i className="fas fa-step-forward" />
    </section>
  );
};

export default connect(null)(AudioPlayer);
