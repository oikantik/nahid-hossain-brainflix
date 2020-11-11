import React from "react";
import "./UploadFormThumb.scss";

function UploadFormThumb(props) {
  return (
    <div className="upload-form-thumbnail">
      <p className="upload-form-thumbnail__headline">VIDEO THUMBNAIL</p>
      <img
        src={props.uploadThumnail}
        alt="Thumbnail"
        className="upload-form-thumbnail__image"
      />
    </div>
  );
}

export default UploadFormThumb;
