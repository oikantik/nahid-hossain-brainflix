import React from "react";
import AuthorDateMeta from "../AuthorDateMeta/AuthorDateMeta";
import VideoAnalytics from "../VideoAnalytics/VideoAnalytics";
import VideoDescriptionBody from "../VideoDescriptionBody/VideoDescriptionBody";
import "./VideoDescription.scss";

function VideoDescription({
  title,
  views,
  likes,
  channel,
  timestamp,
  description,
}) {
  return (
    <div className="video-description">
      <h1 className="video-description__title">{title}</h1>
      <div className="additional-information">
        <AuthorDateMeta channel={channel} timestamp={timestamp} />
        <VideoAnalytics views={views} likes={likes} />
      </div>
      <VideoDescriptionBody description={description} />
    </div>
  );
}

export default VideoDescription;
