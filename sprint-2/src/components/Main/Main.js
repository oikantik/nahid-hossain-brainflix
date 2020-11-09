import React from "react";
import Comments from "../Comments/Comments";
import Video from "../Video/Video";
import VideoDescription from "../VideoDescription/VideoDescription";
import NextVideo from "../NextVideo/NextVideo";
import "./Main.scss";

function Main(props) {
  const {
    title,
    image,
    duration,
    video,
    description,
    views,
    likes,
    timestamp,
    channel,
    comments,
  } = props.mainVideoInfo;
  return (
    <main className="main">
      <Video posterImage={image} duration={duration} videoUrl={video} />
      <section className="main-container">
        <div className="content">
          <VideoDescription
            title={title}
            channel={channel}
            description={description}
            views={views}
            likes={likes}
            timestamp={timestamp}
          />
          <Comments comments={comments} />
        </div>

        <NextVideo
          nextVideos={props.nextVideos}
          onSelectVideo={props.onSelectVideo}
        />
      </section>
    </main>
  );
}

export default Main;
