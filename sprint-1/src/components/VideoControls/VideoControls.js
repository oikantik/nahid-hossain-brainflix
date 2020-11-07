import React from "react";
import "./VideoControls.scss";
import playPauseControlIcon from "../../assets/icons/SVG/Icon-play.svg";
import fullScreenControlIcon from "../../assets/icons/SVG/Icon-fullscreen.svg";
import volumeControlIcon from "../../assets/icons/SVG/Icon-volume.svg";

function VideoControls() {
  return (
    <div className="video-controls">
      <div className="video-controls__play-pause">
        <img
          src={playPauseControlIcon}
          alt="playPause"
          className="video-controls__play-pause-image"
        />
      </div>
      <div className="video-controls__progress">
        <span className="video-controls__progress-line"></span>
        <span className="video-controls__length">0.00 / 0.42</span>
      </div>
      <div className="video-controls__rest">
        <span className="video-controls__full-screen">
          <img
            src={fullScreenControlIcon}
            alt="fullScreen"
            className="video-controls__full-screen-image"
          />
        </span>
        <span className="video-controls__volume">
          <img
            src={volumeControlIcon}
            alt="volume"
            className="video-controls__volume-image"
          />
        </span>
      </div>
    </div>
  );
}

export default VideoControls;
