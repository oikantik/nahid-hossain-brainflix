import React from "react";
import Avatar from "../Avatar/Avatar";
import CommentsArea from "../CommentsArea/CommentsArea";
import CommentsForm from "../CommentsForm/CommentsForm";
import "./Comments.scss";

function Comments() {
  return (
    <section className="comments">
      <h3 className="comments__headline">3 Comments</h3>
      <div className="comment-form-area">
        <Avatar additionalClassName="avatar__image--comments" />
        <CommentsForm />
      </div>
      <div className="comments-areas">
        <CommentsArea />
      </div>
    </section>
  );
}

export default Comments;
