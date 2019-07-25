import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions";
import "./AudioPlayer.scss";

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  playSong = () => {
    this.props.playSong(this.props.currentSong);
    this.audio.current.play();
  };

  pauseSong = () => {
    this.props.pauseSong(this.props.currentSong);
    this.audio.current.pause();
  };

  render() {
    const handlePlayIcon = this.props.currentSong.playing ? (
      <button onClick={this.pauseSong}>
        <i className="fas fa-pause-circle" />
      </button>
    ) : (
      <button onClick={this.playSong}>
        <i className="fas fa-play-circle" />
      </button>
    );

    return (
      <section className="AudioPlayer">
        <h4>{this.props.currentSong.name}</h4>
        <audio src={this.props.currentSong.audio} ref={this.audio} />
        <i className="fas fa-step-backward" />
        {handlePlayIcon}
        <i className="fas fa-step-forward" />
      </section>
    );
  }
}

const mapStateToProps = store => ({
  currentSong: store.currentSong
});

const mapDispatchToProps = dispatch => ({
  playSong: song => dispatch(actions.playSong(song)),
  pauseSong: song => dispatch(actions.pauseSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
