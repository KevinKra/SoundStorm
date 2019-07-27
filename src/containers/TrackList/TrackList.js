import React, { Component } from "react";
import { connect } from "react-redux";
import * as apiCalls from "../../_api/apiCalls";
import * as actions from "../../_redux/actions";
import TrackCard from "../TrackCard/TrackCard";
import "./TrackList.scss";

class TrackList extends Component {
  state = {
    list: []
  };
  async componentDidMount() {
    const response = await apiCalls.fetchGenres(
      this.props.genre,
      this.props.count
    );
    this.setState({ list: response });
  }
  renderTrackCards = () => {
    return this.state.list.map(track => (
      <TrackCard data={{ ...track }} key={track.id} />
    ));
  };

  render() {
    return (
      <section
        className="primary-track-section"
        style={{ width: `${this.props.width}` }}
      >
        <h3 className="section-header">{this.props.listTitle}</h3>
        <div className="TrackList">{this.renderTrackCards()}</div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadPrimaryTracks: tracks => dispatch(actions.loadPrimaryTracks(tracks))
});

export default connect(
  null,
  mapDispatchToProps
)(TrackList);
