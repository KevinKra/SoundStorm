import React from "react";
import TuneBox from "../../containers/TuneBox/TuneBox";
import "./SupportContent.scss";

export default function SupportContent() {
  return (
    <section className="SupportContent">
      <h1>Popular Genres</h1>
      <p>
        Explore artists in the leading genres currently hitting the underground
        scene.
      </p>
      <div className="Genres">
        <TuneBox
          primaryTitle="Rock"
          playlistTitle="Leading Rocks Songs"
          jist="Rock your world"
          playlistLength="12"
          width="23%"
          topImage={
            "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          }
          bottomImage={
            "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          }
        />
        <TuneBox
          primaryTitle="HipHop"
          playlistTitle="The Freshest Tracks"
          jist="Ear to the street"
          playlistLength="17"
          width="23%"
          topImage={
            "https://images.unsplash.com/photo-1527683611643-4009f3a76197?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          }
          bottomImage={
            "https://images.unsplash.com/photo-1541413807941-677a5eea6694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          }
        />
        <TuneBox
          primaryTitle="Country"
          playlistTitle="True to your Roots"
          jist="Our Country"
          playlistLength="13"
          width="23%"
          topImage={
            "https://images.unsplash.com/photo-1559694097-9481924b2905?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
          }
          bottomImage={
            "https://images.unsplash.com/photo-1537763251863-4ef771ed9677?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
          }
        />
        <TuneBox
          primaryTitle="Jazz"
          playlistTitle="Flow with the vibes"
          jist="Music from the Soul"
          playlistLength="14"
          width="23%"
          topImage={
            "https://images.unsplash.com/photo-1525994886773-080587e161c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1648&q=80"
          }
          bottomImage={
            "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
          }
        />
      </div>
    </section>
  );
}
