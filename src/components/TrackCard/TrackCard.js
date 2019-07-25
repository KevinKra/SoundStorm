import React from "react";
import "./TrackCard.scss";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions";
import * as apiCalls from "../../_api/apiCalls";

const TrackCard = props => {
  const { album_image, album_name, name, id, audio } = props.data;

  const concatGenres = genres => {
    let output = genres[0];
    for (let i = 1; i < genres.length; i++) {
      output += `+${genres[i]}`;
    }
    return output;
  };

  const buildPlaylist = async () => {
    props.playTargetSong({ audio, name, album_name, playing: false });
    const genres = concatGenres(props.data.musicinfo.tags.genres);
    const output = await apiCalls.fetchRelatedSongs(genres, 15, id);
    props.data.playing = true;
    output.unshift(props.data);
    props.loadCurrentPlaylist(output);
  };

  return (
    <article className="TrackCard">
      <img src={album_image} alt={album_name} />
      <button onClick={buildPlaylist}>Play Me</button>
    </article>
  );
};

const mapDispatchToProps = dispatch => ({
  playTargetSong: song => dispatch(actions.playTargetSong(song)),
  loadCurrentPlaylist: playlist =>
    dispatch(actions.loadCurrentPlaylist(playlist))
});

export default connect(
  null,
  mapDispatchToProps
)(TrackCard);
