import React from "react";
import Avatar from "../Avatar/Avatar";
import CommentsArea from "../CommentsArea/CommentsArea";
import CommentsForm from "../CommentsForm/CommentsForm";
import "./Comments.scss";

function Comments(props) {
  const comments = props.comments.map((comment) => {
    return <CommentsArea comment={comment} key={comment.id} />;
  });
  return (
    <section className="comments">
      <h3 className="comments__headline">{props.comments.length} Comments</h3>
      <div className="comment-form-area">
        <Avatar additionalClassName="avatar__image--comments" />
        <CommentsForm />
      </div>
      <div className="comments-areas">{comments}</div>
    </section>
  );
}

export default Comments;
