import React from "react";
import "./Video.scss";
import videoFile from "../../assets/video/video.mp4";
import videoPoster from "../../assets/images/video-list-0.jpg";
import VideoControls from "../VideoControls/VideoControls";

function Video() {
  return (
    <section className="video-container">
      <video className="video-container__video" poster={videoPoster}>
        <source src={videoFile} type="mp4" />
      </video>
      <VideoControls />
    </section>
  );
}

export default Video;
