import React from "react";
import "./Video.scss";
import VideoControls from "../VideoControls/VideoControls";

function Video(props) {
  const { posterImage, duration, videoUrl } = props;
  return (
    <section className="video">
      <div className="video-container">
        <video
          className="video-container__video"
          src={videoUrl}
          poster={posterImage}
        ></video>
        <VideoControls duration={duration} />
      </div>
    </section>
  );
}

export default Video;
