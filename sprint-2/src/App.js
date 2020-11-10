import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
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

  renderHomeComponent = () => (
    <Home
      mainVideoInfo={this.state.mainVideo}
      nextVideos={this.state.sideVideo}
      onSelectVideo={this.onSelectVideo}
    />
  );

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" render={this.renderHomeComponent} />
            <Route path="/upload" component={Upload} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
