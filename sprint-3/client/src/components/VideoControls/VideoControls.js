import React from "react";
import "./VideoControls.scss";
import playControlIcon from "../../assets/icons/SVG/Icon-play.svg";
import pauseControlIcon from "../../assets/icons/SVG/Icon-pause.svg";
import fullScreenControlIcon from "../../assets/icons/SVG/Icon-fullscreen.svg";
import volumeControlIcon from "../../assets/icons/SVG/Icon-volume.svg";
import muteControlIcon from "../../assets/icons/SVG/Icon-muted.svg";

function VideoControls(props) {
  const handlePlay = () => {
    props.playVideo();
  };

  const handlePause = () => {
    props.pauseVideo();
  };

  const handleFullScreen = () => {
    props.showFullScreen();
  };

  const handleVolume = () => {
    props.volumeClick();
  };

  const handleProgressChange = (e) => {
    props.onScrubberChange(e);
  };

  return (
    <div className="video-controls">
      {!props.play && (
        <div className="video-controls__play-pause">
          <img
            src={playControlIcon}
            alt="playPause"
            className="video-controls__play-pause-image"
            onClick={handlePlay}
          />
        </div>
      )}

      {props.play && (
        <div className="video-controls__play-pause">
          <img
            src={pauseControlIcon}
            alt="playPause"
            className="video-controls__play-pause-image"
            onClick={handlePause}
          />
          )
        </div>
      )}
      <div className="video-controls__progress">
        <div className="video-controls__progress-area">
          <progress
            className="video-controls__progress-bar"
            value={props.currentTime}
            min="0"
            max={props.duration}
          ></progress>

          {
            <input
              className="video-controls__progress-line"
              value={props.currentTime}
              type="range"
              min="0"
              max={props.duration}
              step="1"
              onChange={handleProgressChange}
            />
          }
        </div>

        <span className="video-controls__length">
          {props.currentTime < 10
            ? 0 + ":0" + props.currentTime
            : props.currentTime >= 10 && props.currentTime < 60
            ? 0 + ":" + props.currentTime
            : props.currentTime / 60 + ":" + Math.ceil(props.duation % 60)}{" "}
          /{" "}
          {props.duration < 60
            ? 0 + ":" + props.duration
            : Math.floor(props.duration / 60) +
              ":" +
              Math.ceil(props.duation % 60)}
        </span>
      </div>
      <div className="video-controls__rest">
        <span
          className="video-controls__full-screen"
          onClick={handleFullScreen}
        >
          <img
            src={fullScreenControlIcon}
            alt="fullScreen"
            className="video-controls__full-screen-image"
          />
        </span>
        {!props.muted && (
          <span className="video-controls__volume" onClick={handleVolume}>
            <img
              src={volumeControlIcon}
              alt="volume"
              className="video-controls__volume-image"
            />
          </span>
        )}
        {props.muted && (
          <span className="video-controls__volume" onClick={handleVolume}>
            <img
              src={muteControlIcon}
              alt="volume"
              className="video-controls__volume-image"
            />
          </span>
        )}
      </div>
    </div>
  );
}

export default VideoControls;
