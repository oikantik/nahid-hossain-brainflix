import React from "react";
import "./UploadFormThumb.scss";
import uploadThumnail from "../../assets/images/Upload-video-preview.jpg";

function UploadFormThumb() {
  return (
    <div className="upload-form-thumbnail">
      <p className="upload-form-thumbnail__headline">VIDEO THUMBNAIL</p>
      <img
        src={uploadThumnail}
        alt="Thumbnail"
        className="upload-form-thumbnail__image"
      />
    </div>
  );
}

export default UploadFormThumb;
