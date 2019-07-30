import React from "react";
import "./PrimaryTracks.scss";
import TrackList from "../../containers/TrackList/TrackList";

export const PrimaryTracks = () => {
  return (
    <section className="PrimaryTracks">
      <TrackList
        genre="hiphop"
        count={6}
        listTitle="Featured HipHop"
        width="32%"
      />
      <TrackList genre="rock" count={6} listTitle="Featured Rock" width="32%" />
      <TrackList
        genre="country"
        count={6}
        listTitle="Featured Country"
        width="32%"
      />
    </section>
  );
};
