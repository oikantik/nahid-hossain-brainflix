import React from "react";
import "./NextVideoInfo.scss";

function NextVideoInfo(props) {
  const { title, channel, image, id } = props.videoInfo;

  const handleSelectVideo = () => {
    props.onSelectVideo(id);
  };

  return (
    <div className="next-video-info" onClick={handleSelectVideo}>
      <div className="next-video-info__thumbnail">
        <img
          className="next-video-info__thumbnail-image"
          src={image}
          alt="videoThumbnail"
        />
      </div>
      <div className="next-video-info__description">
        <span className="next-video-info__title">{title}</span>
        <span className="next-video-info__author">{channel}</span>
      </div>
    </div>
  );
}

export default NextVideoInfo;
