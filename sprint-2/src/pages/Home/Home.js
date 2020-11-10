import React from "react";
import Comments from "../../components/Comments/Comments";
import NextVideo from "../../components/NextVideo/NextVideo";
import Video from "../../components/Video/Video";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import "./Home.scss";

function Home(props) {
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

export default Home;
