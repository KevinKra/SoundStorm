import React, { Component } from "react";
import "./PrimaryTracks.scss";
import * as apiCalls from "../../_api/apiCalls";
import TrackCard from "../TrackCard/TrackCard";
import { connect } from "react-redux";
import * as actions from "../../_redux/actions";

class PrimaryTracks extends Component {
  async componentDidMount() {
    const response = await apiCalls.fetchGenres("hiphop", 6);
    this.props.loadPrimaryTracks(response);
  }

  renderTrackCards = () => {
    return this.props.primaryTracks.map(track => (
      <TrackCard data={{ ...track }} key={track.id} />
    ));
  };
  render() {
    return (
      <section className="PrimaryTracks">
        <div className="TrackList">{this.renderTrackCards()}</div>
        <section className="TrackDetails">TrackDetails</section>
      </section>
    );
  }
}

const mapStateToProps = store => ({
  primaryTracks: store.primaryTracks
});

const mapDispatchToProps = dispatch => ({
  loadPrimaryTracks: tracks => dispatch(actions.loadPrimaryTracks(tracks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimaryTracks);
