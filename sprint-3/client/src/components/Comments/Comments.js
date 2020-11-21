import React from "react";
import Avatar from "../Avatar/Avatar";
import CommentsArea from "../CommentsArea/CommentsArea";
import CommentsForm from "../CommentsForm/CommentsForm";
import "./Comments.scss";

function Comments({
  comments,
  onCommentSubmit,
  onCommentDelete,
  onCommentLike,
}) {
  const allComments = comments
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    })
    .map((comment) => {
      return (
        <CommentsArea
          name={comment.name}
          timestamp={comment.timestamp}
          comment={comment.comment}
          likes={comment.likes}
          id={comment.id}
          key={comment.id}
          onCommentDelete={onCommentDelete}
          onCommentLike={onCommentLike}
        />
      );
    });
  return (
    <div className="comments">
      <h3 className="comments__headline">{comments.length} Comments</h3>
      <div className="comment-form-area">
        <Avatar additionalClassName="avatar__image--comments" />
        <CommentsForm onCommentSubmit={onCommentSubmit} />
      </div>
      <div className="comments-areas">{allComments}</div>
    </div>
  );
}

export default Comments;
