import React, { Component, Fragment } from "react";
import "./MainPage.scss";

export default class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <section className="MainPage">
          <header className="TopNav">
            <h2>TUNIC</h2>
            <nav>ROCK HIPHOP POP</nav>
          </header>
          <section className="CardBoard">
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
          <section className="SupportContent">
            <h1>Spotlight</h1>
            <div className="Genres">
              <article className="Genre">GENRE 1</article>
              <article className="Genre">GENRE 2</article>
              <article className="Genre">GENRE 3</article>
              <article className="Genre">GENRE 4</article>
            </div>
          </section>
          <section className="SupportContent">
            <h1>Spotlight 2</h1>
            <div className="Genres">
              <article className="Genre">GENRE 1</article>
              <article className="Genre">GENRE 2</article>
              <article className="Genre">GENRE 3</article>
              <article className="Genre">GENRE 4</article>
            </div>
          </section>
          <section className="SupportPage">
            <section className="CardControls">
              <p>Card Controls</p>
            </section>
            <section className="ArtistBio">
              <header>
                <button>Drop Down Arrow</button>
              </header>
              <p>Artist Section</p>
            </section>
          </section>
        </section>
      </Fragment>
    );
  }
}
