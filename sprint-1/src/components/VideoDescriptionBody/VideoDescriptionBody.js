import React from "react";
import "./VideoDescriptionBody.scss";

function VideoDescriptionBody(props) {
  return (
    <article className="video-description-body">
      <p className="video-description-body__text">{props.description}</p>
    </article>
  );
}

export default VideoDescriptionBody;
