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
            <article className="Card">
              <button>Click</button>
            </article>
            <article className="Card">CARD</article>
            <article className="Card">CARD</article>
            <article className="Card">CARD</article>
            <article className="Card">CARD</article>
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
