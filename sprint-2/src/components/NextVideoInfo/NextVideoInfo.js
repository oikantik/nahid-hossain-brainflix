import React from "react";
import { Link } from "react-router-dom";
import "./NextVideoInfo.scss";

function NextVideoInfo(props) {
  const { title, channel, image, id } = props.videoInfo;

  return (
    <div className="next-video-info">
      <div className="next-video-info__thumbnail">
        <Link to={"/video/" + id}>
          <img
            className="next-video-info__thumbnail-image"
            src={image}
            alt="videoThumbnail"
          />
        </Link>
      </div>
      <div className="next-video-info__description">
        <span className="next-video-info__title">{title}</span>
        <span className="next-video-info__author">{channel}</span>
      </div>
    </div>
  );
}

export default NextVideoInfo;
