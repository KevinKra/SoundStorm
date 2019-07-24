import React, { Component } from "react";
import "./PrimaryTracks.scss";

export default class CardBoard extends Component {
  render() {
    return (
      <section className="PrimaryTracks">
        <div className="TrackList">
          <article className="Card">
            <button>Click</button>
          </article>
          <article className="Card">CARD</article>
          <article className="Card">CARD</article>
          <article className="Card">CARD</article>
          <article className="Card">CARD</article>
          <article className="Card">CARD</article>
        </div>
        <section className="TrackDetails">TrackDetails</section>
      </section>
    );
  }
}
