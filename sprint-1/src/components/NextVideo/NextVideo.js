import React from "react";
import NextVideoInfo from "../NextVideoInfo/NextVideoInfo";
import "./NextVideo.scss";

function NextVideo() {
  return (
    <aside className="next-videos">
      <h5 className="next-videos__headline">NEXT VIDEO</h5>
      <section className="next-video">
        <NextVideoInfo />
      </section>
    </aside>
  );
}

export default NextVideo;
