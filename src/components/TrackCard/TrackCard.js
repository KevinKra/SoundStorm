import React from "react";
import "./TrackCard.scss";

export default function TrackCard(props) {
  const {
    album_image,
    album_name,
    name,
    artist_idstr,
    release_date,
    audio
  } = props.data;

  return (
    <article className="TrackCard">
      <img src={album_image} alt={album_name} />
      {/* <h4>{name}</h4> */}
      <audio controls src={audio} />
    </article>
  );
}
