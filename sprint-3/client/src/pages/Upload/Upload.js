import React, { Component } from "react";
import UploadForm from "../../components/UploadForm/UploadForm";
import UploadFormThumb from "../../components/UploadFormThumb/UploadFormThumb";
import "./Upload.scss";
import uploadThumnail from "../../assets/images/Upload-video-preview.jpg";
import { axiosInstance } from "../../utils/axios";

class Upload extends Component {
  state = {
    thumbnailImage: uploadThumnail,
    submitted: false,
  };

  componentDidUpdate() {
    setInterval(() => {
      if (this.state.submitted) {
        this.setState({ submitted: false });
        this.props.history.push("/");
      }
    }, 3000);
  }

  onFormSubmit = (event) => {
    const video = {
      title: event.target.title.value,
      channel: "BrainStation Man",
      image: "http://localhost:7811/Upload-video-preview.jpg",
      description: event.target.description.value,
      views: "0",
      likes: "0",
      duration: "0:20",
      video: "http://localhost:7811/video.mp4",
      timestamp: new Date().getTime(),
      comments: [],
    };
    axiosInstance.post("videos", { ...video }).then((response) => {
      this.setState({
        submitted: true,
      });
    });
  };

  render() {
    return (
      <main className="upload">
        <section className="upload-form-container">
          <h1 className="upload-form-container__headline">Upload Video</h1>
          <div className="upload-form-container__main">
            <UploadFormThumb uploadThumnail={this.state.thumbnailImage} />
            <UploadForm
              onFormSubmit={this.onFormSubmit}
              submitted={this.state.submitted}
            />
          </div>
        </section>
      </main>
    );
  }
}

export default Upload;
