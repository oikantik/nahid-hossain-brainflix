import React from "react";
import "./Video.scss";
import VideoControls from "../VideoControls/VideoControls";
import { apiKey } from "../../utils/axios";

function Video({ posterImage, duration, videoUrl }) {
  return (
    <section className="video">
      <div className="video-container">
        <video
          className="video-container__video"
          src={videoUrl + "?api_key=" + apiKey}
          poster={posterImage}
        ></video>
        <VideoControls duration={duration} />
      </div>
    </section>
  );
}

export default Video;
