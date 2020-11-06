import React from "react";
import Comments from "../Comments/Comments";
import Video from "../Video/Video";
import VideoDescription from "../VideoDescription/VideoDescription";
import "./Main.scss";

function Main() {
  return (
    <main>
      <Video />
      <VideoDescription />
      <Comments />
    </main>
  );
}

export default Main;
