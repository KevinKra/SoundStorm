import React from "react";
import "./HeroImage.scss";

export default function HeroImage(props) {
  const styles = {
    width: `${props.width}`,
    height: `${props.height}`,
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div className="HeroImage">
      <div style={styles} />
    </div>
  );
}
