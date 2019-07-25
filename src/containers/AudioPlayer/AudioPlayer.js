import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions";
import "./AudioPlayer.scss";

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { currentSongIndex: 0 };
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

  nextSong = i => {
    const nextSong = this.props.currentPlaylist[i + 1];
    if (nextSong !== undefined) {
      this.props.playTargetSong(nextSong);
      this.setState({ currentSongIndex: this.state.currentSongIndex + 1 });
    }
    if (nextSong === undefined) {
      const beginning = this.props.currentPlaylist[0];
      this.props.playTargetSong(beginning);
      this.setState({ currentSongIndex: 0 });
    }
  };

  prevSong = i => {
    const previousSong = this.props.currentPlaylist[i - 1];
    if (previousSong !== undefined) {
      this.props.playTargetSong(previousSong);
      this.setState({ currentSongIndex: this.state.currentSongIndex - 1 });
    }
    if (previousSong === undefined) {
      const end = this.props.currentPlaylist[
        this.props.currentPlaylist.length - 1
      ];
      this.props.playTargetSong(end);
      this.setState({
        currentSongIndex: this.props.currentPlaylist.indexOf(end)
      });
    }
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
        <audio
          src={this.props.currentSong.audio}
          autoPlay={true}
          ref={this.audio}
          onEnded={this.nextSong}
        />
        <i
          className="fas fa-step-backward"
          onClick={() => this.prevSong(this.state.currentSongIndex)}
        />
        {handlePlayIcon}
        <i
          className="fas fa-step-forward"
          onClick={() => this.nextSong(this.state.currentSongIndex)}
        />
      </section>
    );
  }
}

const mapStateToProps = store => ({
  currentSong: store.currentSong,
  currentPlaylist: store.currentPlaylist
});

const mapDispatchToProps = dispatch => ({
  playSong: song => dispatch(actions.playSong(song)),
  pauseSong: song => dispatch(actions.pauseSong(song)),
  playTargetSong: song => dispatch(actions.playTargetSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
