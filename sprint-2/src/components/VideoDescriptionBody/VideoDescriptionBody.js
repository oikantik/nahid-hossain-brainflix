import React from "react";
import "./VideoDescriptionBody.scss";

function VideoDescriptionBody({ description }) {
  return (
    <article className="video-description-body">
      <p className="video-description-body__text">{description}</p>
    </article>
  );
}

export default VideoDescriptionBody;
