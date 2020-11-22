import React from "react";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import "./UploadForm.scss";
import { Link } from "react-router-dom";

function UploadForm(props) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(event);
    event.target.reset();
  };
  return (
    <form className="upload-form" onSubmit={handleFormSubmit}>
      {props.submitted && (
        <SuccessMessage message="Upload successful, redirecting..." />
      )}
      <div className="upload-form__title-container">
        <label htmlFor="title" className="upload-form__title-label">
          TITLE YOUR VIDEO
        </label>
        <input
          name="title"
          className="upload-form__input"
          placeholder="Add a title to your video"
        />
      </div>

      <div className="upload-form__desription-container">
        <label htmlFor="description" className="upload-form__description-label">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea
          name="description"
          className="upload-form__text-area"
          placeholder="Add a description of your video"
        ></textarea>
      </div>
      <div className="upload-form__button-container">
        <button type="submit" className="upload-form__button-publish">
          PUBLISH
        </button>
        <Link className="upload-form__button-cancel" to="/">
          CANCEL
        </Link>
      </div>
    </form>
  );
}

export default UploadForm;
