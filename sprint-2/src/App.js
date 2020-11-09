import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { mainVideo, sideVideo } from "./utils/data";

class App extends Component {
  // filtering the sidevideos in state based on the main video array's first element
  state = {
    sideVideo: sideVideo.filter((each) => each.id !== mainVideo[0].id),
    mainVideo: mainVideo[0],
  };

  // when a sidebar video is selected set State to show the updated videos
  // set the main video to be the selected video
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
        <Main
          mainVideoInfo={this.state.mainVideo}
          nextVideos={this.state.sideVideo}
          onSelectVideo={this.onSelectVideo}
        />
      </div>
    );
  }
}

export default App;
