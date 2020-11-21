import React from "react";
import AuthorDateMeta from "../AuthorDateMeta/AuthorDateMeta";
import VideoAnalytics from "../VideoAnalytics/VideoAnalytics";
import "./VideoDescription.scss";

function VideoDescription({
  title,
  views,
  likes,
  channel,
  timestamp,
  description,
  onVideoLike,
}) {
  return (
    <div className="video-description">
      <h1 className="video-description__title">{title}</h1>
      <div className="additional-information">
        <AuthorDateMeta channel={channel} timestamp={timestamp} />
        <VideoAnalytics views={views} likes={likes} onVideoLike={onVideoLike} />
      </div>
      <article className="video-description-body">
        <p className="video-description-body__text">{description}</p>
      </article>
    </div>
  );
}

export default VideoDescription;
