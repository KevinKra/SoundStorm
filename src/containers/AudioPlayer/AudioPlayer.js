import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions";
import "./AudioPlayer.scss";

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    // this.state = { currentSongIndex: this.props.currentSongIndex };
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
    const newSong = this.props.currentPlaylist[i + 1];
    const oldSong = this.props.currentPlaylist[i];
    if (newSong !== undefined) {
      oldSong.playing = false;
      newSong.playing = true;
      this.props.incrementIndex(
        this.props.currentSongIndex,
        this.props.currentPlaylist.length - 1
      );
      this.props.playTargetSong(newSong);
    }
    if (newSong === undefined) {
      const beginning = this.props.currentPlaylist[0];
      oldSong.playing = false;
      beginning.playing = true;
      this.props.incrementIndex(
        this.props.currentSongIndex,
        this.props.currentPlaylist.length - 1
      );
      this.props.playTargetSong(beginning);
    }
  };

  prevSong = i => {
    const newSong = this.props.currentPlaylist[i - 1];
    const oldSong = this.props.currentPlaylist[i];
    if (newSong !== undefined) {
      oldSong.playing = false;
      newSong.playing = true;
      this.props.decrementIndex(
        this.props.currentSongIndex,
        this.props.currentPlaylist.length - 1
      );
      this.props.playTargetSong(newSong);
    }
    if (newSong === undefined) {
      const end = this.props.currentPlaylist[
        this.props.currentPlaylist.length - 1
      ];
      oldSong.playing = false;
      end.playing = true;
      this.props.decrementIndex(
        this.props.currentSongIndex,
        this.props.currentPlaylist.length - 1
      );
      this.props.playTargetSong(end);
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
        <p>{this.props.currentSong.duration}</p>
        <audio
          src={this.props.currentSong.audio}
          autoPlay={true}
          ref={this.audio}
          onEnded={() => this.nextSong(this.props.currentSongIndex)}
        />
        <div className="button-panel">
          <i
            className="fas fa-step-backward"
            onClick={() => this.prevSong(this.props.currentSongIndex)}
          />
          {handlePlayIcon}
          <i
            className="fas fa-step-forward"
            onClick={() => this.nextSong(this.props.currentSongIndex)}
          />
        </div>
      </section>
    );
  }
}

const mapStateToProps = store => ({
  currentSong: store.currentSong,
  currentPlaylist: store.currentPlaylist,
  currentSongIndex: store.currentSongIndex
});

const mapDispatchToProps = dispatch => ({
  playSong: song => dispatch(actions.playSong(song)),
  pauseSong: song => dispatch(actions.pauseSong(song)),
  playTargetSong: song => dispatch(actions.playTargetSong(song)),
  incrementIndex: (currentIndex, playlistLength) =>
    dispatch(actions.incrementIndex(currentIndex, playlistLength)),
  decrementIndex: (currentIndex, playlistLength) =>
    dispatch(actions.decrementIndex(currentIndex, playlistLength))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
