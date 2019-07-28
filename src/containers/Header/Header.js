import React from "react";
import * as apiCalls from "../../_api/apiCalls";
import * as actions from "../../_redux/actions";
import { connect } from "react-redux";
import "./Header.scss";

const Header = props => {
  const updatePrimaryTrack = async genre => {
    const tracks = apiCalls.fetchGenres(genre, 6);
    props.loadPrimaryTracks(await tracks);
  };
  return (
    <header className="Header">
      <div className="header-main">
        <h2>SOUNDSTORM</h2>
        <form className="header-btns">
          <button className="btn register">Register</button>
          <button className="btn">Login</button>
        </form>
      </div>
      <nav>
        <button onClick={() => updatePrimaryTrack("rock")}>Rock</button>
        <button onClick={() => updatePrimaryTrack("hiphop")}>HipHop</button>
        <button onClick={() => updatePrimaryTrack("metal")}>Metal</button>
        <button onClick={() => updatePrimaryTrack("Jazz")}>Jazz</button>
        <button onClick={() => updatePrimaryTrack("Indie")}>Indie</button>
        <button onClick={() => updatePrimaryTrack("Filmscore")}>
          Filmscore
        </button>
        <button onClick={() => updatePrimaryTrack("Classical")}>
          Classical
        </button>
        <button onClick={() => updatePrimaryTrack("Chillout")}>Chillout</button>
        <button onClick={() => updatePrimaryTrack("Ambient")}>Ambient</button>
        <button onClick={() => updatePrimaryTrack("Folk")}>Folk</button>
        <button onClick={() => updatePrimaryTrack("Country")}>Country</button>
        <button onClick={() => updatePrimaryTrack("Punk")}>Punk</button>
        <button onClick={() => updatePrimaryTrack("House")}>House</button>
      </nav>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  loadPrimaryTracks: tracks => dispatch(actions.loadPrimaryTracks(tracks))
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
