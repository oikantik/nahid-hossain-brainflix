import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NextVideo from "./components/NextVideo/NextVideo";
import { mainVideo, sideVideo } from "./utils/data";

class App extends Component {
  state = {
    sideVideo: sideVideo.filter((each) => each.id !== mainVideo[0].id),
    mainVideo: mainVideo[0],
  };

  onSelectVideo = (id) => {
    this.setState({
      ...this.state,
      sideVideo: sideVideo.filter((each) => each.id !== id),
      mainVideo: mainVideo.find((video) => video.id === id),
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main mainVideoInfo={this.state.mainVideo} />
        <NextVideo
          nextVideos={this.state.sideVideo}
          onSelectVideo={this.onSelectVideo}
        />
      </div>
    );
  }
}

export default App;
