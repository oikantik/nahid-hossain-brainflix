import React, { Component, createRef } from "react";
import "./Video.scss";
import VideoControls from "../VideoControls/VideoControls";

class Video extends Component {
  constructor() {
    super();
    this.videoRef = createRef();
    this.videoParentRef = createRef();
  }

  state = {
    play: false,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    muted: false,
  };

  playVideo = () => {
    this.setState({ play: true }, () => {
      this.videoRef.current.play();
    });
  };

  getDuration = () => {
    this.setState({
      duration: Math.round(this.videoRef.current.duration),
    });
  };

  pauseVideo = () => {
    this.setState({ play: false }, () => {
      this.videoRef.current.pause();
    });
  };

  showFullScreen = () => {
    if (!this.state.fullscreen) {
      this.setState({ fullscreen: true }, () => {
        this.videoParentRef.current.requestFullscreen();
      });
    }
    if (this.state.fullscreen) {
      document.exitFullscreen().then(() => {
        this.setState({ fullscreen: false });
      });
    }
  };

  volumeClick = () => {
    if (this.videoRef.current.muted) {
      this.setState(
        { muted: false },
        () => (this.videoRef.current.muted = false)
      );
    }

    if (!this.videoRef.current.muted) {
      this.setState(
        { muted: true },
        () => (this.videoRef.current.muted = true)
      );
    }
  };

  onVideoProgress = () => {
    this.setState({
      currentTime: Math.round(this.videoRef.current.currentTime),
    });
  };

  onScrubberChange = (e) => {
    this.setState(
      {
        currentTime: e.target.value,
      },
      () => {
        this.videoRef.current.currentTime = e.target.value;
      }
    );
  };

  render() {
    const { posterImage, videoUrl } = this.props;
    return (
      <section className="video">
        <div className="video-container">
          <div
            className="video-container__video-area"
            ref={this.videoParentRef}
          >
            <video
              ref={this.videoRef}
              className="video-container__video"
              src={videoUrl}
              poster={posterImage}
              type="video/mp4"
              onLoadedMetadata={this.getDuration}
              controls={false}
              onTimeUpdate={this.onVideoProgress}
            ></video>
            <VideoControls
              duration={this.state.duration}
              playVideo={this.playVideo}
              pauseVideo={this.pauseVideo}
              play={this.state.play}
              showFullScreen={this.showFullScreen}
              volumeClick={this.volumeClick}
              muted={this.state.muted}
              currentTime={this.state.currentTime}
              onScrubberChange={this.onScrubberChange}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Video;
