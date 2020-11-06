import React from "react";
import AuthorDateMeta from "../AuthorDateMeta/AuthorDateMeta";
import VideoAnalytics from "../VideoAnalytics/VideoAnalytics";
import VideoDescriptionBody from "../VideoDescriptionBody/VideoDescriptionBody";
import "./VideoDescription.scss";

function VideoDescription() {
  return (
    <section className="video-description">
      <h1 className="video-description__title">BMX Rampage: 2018 Highlights</h1>
      <div className="additional-information">
        <AuthorDateMeta />
        <VideoAnalytics />
      </div>
      <VideoDescriptionBody />
    </section>
  );
}

export default VideoDescription;
