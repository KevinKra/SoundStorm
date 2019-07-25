import React, { Component } from "react";
import "./SupportContent.scss";

export default class SupportContent extends Component {
  render() {
    return (
      <section className="SupportContent">
        <h1>Spotlight</h1>
        <div className="Genres">
          <article className="Genre">GENRE 1</article>
          <article className="Genre">GENRE 2</article>
          <article className="Genre">GENRE 3</article>
          <article className="Genre">GENRE 4</article>
        </div>
      </section>
    );
  }
}
