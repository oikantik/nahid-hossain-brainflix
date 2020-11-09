import React from "react";
import Avatar from "../Avatar/Avatar";
import CommentsArea from "../CommentsArea/CommentsArea";
import CommentsForm from "../CommentsForm/CommentsForm";
import "./Comments.scss";

function Comments({ comments }) {
  const allComments = comments.map((comment) => {
    return (
      <CommentsArea
        name={comment.name}
        date={comment.date}
        comment={comment.comment}
        key={comment.id}
      />
    );
  });
  return (
    <div className="comments">
      <h3 className="comments__headline">{comments.length} Comments</h3>
      <div className="comment-form-area">
        <Avatar additionalClassName="avatar__image--comments" />
        <CommentsForm />
      </div>
      <div className="comments-areas">{allComments}</div>
    </div>
  );
}

export default Comments;
