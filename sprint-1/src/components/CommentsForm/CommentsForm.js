import React from "react";
import "./CommentsForm.scss";

function CommentsForm() {
  return (
    <form className="comments-form">
      <label htmlFor="comments" className="comments-form__label">
        JOIN THE CONVERSATION
      </label>
      <textarea
        name="comment"
        className="comments-form__input"
        placeholder="Write comment here"
      ></textarea>
      <button className="comments-form__button">COMMENT</button>
    </form>
  );
}

export default CommentsForm;
