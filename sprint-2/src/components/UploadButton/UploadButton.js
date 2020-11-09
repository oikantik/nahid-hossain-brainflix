import React from "react";
import "./UploadButton.scss";
import buttonIcon from "../../assets/icons/SVG/Icon-upload.svg";

function UploadButton() {
  return (
    <button className="upload-button">
      <span className="upload-button__icon">
        <img
          src={buttonIcon}
          className="upload-button__icon-image"
          alt="icon"
        />
      </span>
      <span className="upload-button__text">Upload</span>
    </button>
  );
}

export default UploadButton;
