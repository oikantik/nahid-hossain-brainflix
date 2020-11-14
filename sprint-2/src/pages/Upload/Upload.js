import React, { Component } from "react";
import UploadForm from "../../components/UploadForm/UploadForm";
import UploadFormThumb from "../../components/UploadFormThumb/UploadFormThumb";
import "./Upload.scss";
import uploadThumnail from "../../assets/images/Upload-video-preview.jpg";

class Upload extends Component {
  state = {
    videoTitle: "",
    videDescription: "",
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
    this.setState({
      videoTitle: event.target.title.value,
      videDescription: event.target.description.value,
      submitted: true,
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
