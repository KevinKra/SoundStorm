import React, { Component } from "react";
import "./SupportContent.scss";
import TuneBox from "../../containers/TuneBox/TuneBox";

export default class SupportContent extends Component {
  render() {
    return (
      <section className="SupportContent">
        <h1>Spotlight</h1>
        <div className="Genres">
          <TuneBox
            title="Rock"
            jist="Rock your world"
            playlistLength="12"
            image={
              "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            }
          />
          <TuneBox />
          <TuneBox />
          <TuneBox />
          {/* <article className="Genre">GENRE 1</article>
          <article className="Genre">GENRE 2</article>
          <article className="Genre">GENRE 3</article>
          <article className="Genre">GENRE 4</article> */}
        </div>
      </section>
    );
  }
}
