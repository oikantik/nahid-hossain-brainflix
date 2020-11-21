import React, { Component } from "react";
import { axiosInstance } from "../../utils/axios";
import Comments from "../../components/Comments/Comments";
import NextVideo from "../../components/NextVideo/NextVideo";
import Video from "../../components/Video/Video";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import "./Home.scss";
import Loading from "../../components/Loading/Loading";

class Home extends Component {
  state = {
    sideVideo: [],
    mainVideo: {},
    loading: true,
  };

  fetchInitialData = () => {
    axiosInstance
      .get("videos")
      .then((response) => {
        this.setState({
          sideVideo: response.data,
        });
        const mainVideoId = response.data[0].id;
        axiosInstance.get("videos/" + mainVideoId).then((response) => {
          this.setState({
            mainVideo: response.data,
            loading: false,
          });
        });
      })
      .catch((error) => console.log(error));
  };

  fetchUpdatedMainVideo = (params) => {
    axiosInstance
      .get("videos/" + params)
      .then((response) => {
        this.setState({
          mainVideo: response.data,
          refresh: false,
        });
      })
      .catch((error) => console.log(error));
  };

  likeVideo = () => {
    axiosInstance
      .put("videos/" + this.state.mainVideo.id)
      .then(() => {
        this.fetchUpdatedMainVideo(this.state.mainVideo.id);
      })
      .catch((error) => console.log(error));
  };

  postNewComments = (comment) => {
    axiosInstance
      .post("videos/" + this.state.mainVideo.id + "/comments", {
        ...comment,
      })
      .then(() => {
        this.fetchUpdatedMainVideo(this.state.mainVideo.id);
      })
      .catch((error) => console.log(error));
  };

  deleteComment = (id) => {
    axiosInstance
      .delete("videos/" + this.state.mainVideo.id + "/comments/" + id)
      .then(() => {
        this.fetchUpdatedMainVideo(this.state.mainVideo.id);
      })
      .catch((error) => console.log(error));
  };

  likeComment = (id) => {
    axiosInstance
      .put("videos/" + this.state.mainVideo.id + "/comments/" + id)
      .then(() => {
        this.fetchUpdatedMainVideo(this.state.mainVideo.id);
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchInitialData();
  }

  componentDidUpdate() {
    if (
      this.props.match.params.id &&
      this.props.match.params.id !== this.state.mainVideo.id
    ) {
      this.fetchUpdatedMainVideo(this.props.match.params.id);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (
      this.props.match.path === "/" &&
      this.state.mainVideo.id &&
      this.state.mainVideo.id !== this.state.sideVideo[0].id
    ) {
      this.fetchUpdatedMainVideo(this.state.sideVideo[0].id);
    }
  }

  onVideoLike = () => {
    this.likeVideo();
  };

  onCommentSubmit = (comment) => {
    this.postNewComments(comment);
  };

  onCommentDelete = (id) => {
    this.deleteComment(id);
  };

  onCommentLike = (id) => {
    this.likeComment(id);
  };

  render() {
    return this.state.loading ? (
      <Loading message="Videos" />
    ) : (
      <main className="main">
        <Video
          posterImage={this.state.mainVideo.image}
          duration={this.state.mainVideo.duration}
          videoUrl={this.state.mainVideo.video}
        />
        <section className="main-container">
          <div className="content">
            <VideoDescription
              title={this.state.mainVideo.title}
              channel={this.state.mainVideo.channel}
              description={this.state.mainVideo.description}
              views={this.state.mainVideo.views}
              likes={this.state.mainVideo.likes}
              timestamp={this.state.mainVideo.timestamp}
              onVideoLike={this.onVideoLike}
            />
            <Comments
              comments={this.state.mainVideo.comments}
              onCommentSubmit={this.onCommentSubmit}
              onCommentDelete={this.onCommentDelete}
              onCommentLike={this.onCommentLike}
            />
          </div>

          <NextVideo
            currentVideoId={this.state.mainVideo.id}
            nextVideos={this.state.sideVideo}
          />
        </section>
      </main>
    );
  }
}

export default Home;
