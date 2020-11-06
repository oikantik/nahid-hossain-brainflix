import React from "react";
import NextVideoInfo from "../NextVideoInfo/NextVideoInfo";
import "./NextVideo.scss";

function NextVideo(props) {
  const nextVideos = props.nextVideos.map((video) => {
    return (
      <NextVideoInfo
        videoInfo={video}
        key={video.id}
        onSelectVideo={props.onSelectVideo}
      />
    );
  });
  return (
    <aside className="next-videos">
      <h5 className="next-videos__headline">NEXT VIDEO</h5>
      <section className="next-video">{nextVideos}</section>
    </aside>
  );
}

export default NextVideo;
