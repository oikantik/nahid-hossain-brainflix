import React from "react";
import NextVideoInfo from "../NextVideoInfo/NextVideoInfo";
import "./NextVideo.scss";

function NextVideo(props) {
  const nextVideos = props.nextVideos
    .filter((video) => video.id !== props.currentVideoId)
    .map((video) => {
      return <NextVideoInfo videoInfo={video} key={video.id} />;
    });
  return (
    <div className="next-videos">
      <h5 className="next-videos__headline">NEXT VIDEO</h5>
      <section className="next-video">{nextVideos}</section>
    </div>
  );
}

export default NextVideo;
