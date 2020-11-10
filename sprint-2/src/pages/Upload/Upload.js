import React from "react";
import UploadForm from "../../components/UploadForm/UploadForm";
import UploadFormThumb from "../../components/UploadFormThumb/UploadFormThumb";
import "./Upload.scss";

function Upload() {
  return (
    <main className="upload">
      <section className="upload-form-container">
        <h1 className="upload-form-container__headline">Upload Video</h1>
        <UploadFormThumb />
        <UploadForm />
      </section>
    </main>
  );
}

export default Upload;
