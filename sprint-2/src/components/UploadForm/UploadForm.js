import React from "react";
import "./UploadForm.scss";

function UploadForm() {
  return (
    <form className="upload-form">
      <div className="upload-form__title-container">
        <label htmlFor="title" className="upload-form__title-label">
          TITLE YOUR VIDEO
        </label>
        <input
          className="upload-form__input"
          placeholder="Add a title to your video"
        />
      </div>

      <div className="upload-form__desription-container">
        <label htmlFor="description" className="upload-form__description-label">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea
          className="upload-form__text-area"
          placeholder="Add a description of your video"
        ></textarea>
      </div>
      <div className="upload-form__button-container">
        <button className="upload-form__button-publish">PUBLISH</button>
        <button className="upload-form__button-cancel">CANCEL</button>
      </div>
    </form>
  );
}

export default UploadForm;
