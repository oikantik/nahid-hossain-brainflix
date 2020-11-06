import React from "react";
import "./NextVideoInfo.scss";
import videoThumbnailImage from "../../assets/images/video-list-1.jpg";

function NextVideoInfo() {
  return (
    <div className="next-video-info">
      <div className="next-video-info__thumbnail">
        <img
          className="next-video-info__thumbnail-image"
          src={videoThumbnailImage}
          alt="videoThumbnail"
        />
      </div>
      <div className="next-video-info__description">
        <span className="next-video-info__title">
          Become A Travel Pro In One Easy Lesson
        </span>
        <span className="next-video-info__author">Todd Welch</span>
      </div>
    </div>
  );
}

export default NextVideoInfo;
