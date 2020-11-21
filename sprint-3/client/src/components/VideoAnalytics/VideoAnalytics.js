import React from "react";
import "./VideoAnalytics.scss";
import videoViewIcon from "../../assets/icons/SVG/Icon-views.svg";
import videoFavIcon from "../../assets/icons/SVG/Icon-likes.svg";

function VideoAnalytics({ views, likes, onVideoLike }) {
  const handleLikeClick = () => {
    onVideoLike();
  };
  return (
    <div className="video-analytics">
      <div className="video-analytics__views">
        <span className="video-analytics__views-icon">
          <img
            src={videoViewIcon}
            alt="views"
            className="video-analytics__views-icon-image"
          />
        </span>
        <span className="video-analytics__views-count">{views}</span>
      </div>
      <div className="video-analytics__favorites">
        <span
          className="video-analytics__favorites-icon"
          onClick={handleLikeClick}
        >
          <img
            src={videoFavIcon}
            alt="likes"
            className="video-analytics__favorites-icon-image"
          />
        </span>
        <span className="video-analytics__favorites-count">{likes}</span>
      </div>
    </div>
  );
}

export default VideoAnalytics;
