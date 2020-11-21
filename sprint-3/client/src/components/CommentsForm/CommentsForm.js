import React from "react";
import "./CommentsForm.scss";

function CommentsForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onCommentSubmit({
      name: "BrainStation Man",
      comment: event.target.comment.value,
      likes: "0",
      timestamp: new Date().getTime(),
    });
    event.target.reset();
  };
  return (
    <form className="comments-form" onSubmit={handleSubmit}>
      <label htmlFor="comments" className="comments-form__label">
        JOIN THE CONVERSATION
      </label>
      <div className="comments-form__fieldset">
        <textarea
          name="comment"
          className="comments-form__input"
          placeholder="Write comment here"
        ></textarea>
        <button type="submit" className="comments-form__button">
          COMMENT
        </button>
      </div>
    </form>
  );
}

export default CommentsForm;
