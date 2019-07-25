import React, { Component } from "react";
import * as apiCalls from "../../_api/apiCalls";
import TrackCard from "../TrackCard/TrackCard";
import "./PrimaryTracks.scss";

export default class PrimaryTracks extends Component {
  async componentDidMount() {
    await apiCalls.fetchGenres("hiphop", 6);
  }
  render() {
    return (
      <section className="PrimaryTracks">
        <div className="TrackList">
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
        </div>
        <section className="TrackDetails">TrackDetails</section>
      </section>
    );
  }
}
