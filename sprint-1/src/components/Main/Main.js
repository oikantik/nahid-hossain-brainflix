import React from "react";
import Comments from "../Comments/Comments";
import Video from "../Video/Video";
import VideoDescription from "../VideoDescription/VideoDescription";
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
    <main>
      <Video posterImage={image} duration={duration} videoUrl={video} />
      <VideoDescription
        title={title}
        channel={channel}
        description={description}
        views={views}
        likes={likes}
        timestamp={timestamp}
      />
      <Comments comments={comments} />
    </main>
  );
}

export default Main;
