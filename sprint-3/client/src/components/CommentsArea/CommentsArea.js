import React from "react";
import "./CommentsArea.scss";
import momentsAgo from "../../utils/date";

function CommentsArea({
  name,
  timestamp,
  comment,
  likes,
  id,
  onCommentDelete,
  onCommentLike,
}) {
  const handleCommentDelete = () => {
    onCommentDelete(id);
  };
  const handleCommentLike = () => {
    onCommentLike(id);
  };
  return (
    <div className="comments-area">
      <div className="comments-area__avatar"></div>
      <div className="comments-content">
        <div className="comments-content__top">
          <span className="comments-content__top-name">{name}</span>
          <span className="comments-content__top-date">
            {momentsAgo(timestamp)}
          </span>
        </div>
        <article className="comments-content__main">{comment}</article>
        <div className="comments-content__actions">
          <button
            className="comments-content__actions-delete"
            onClick={handleCommentDelete}
          >
            Delete
          </button>
          <button
            className="comments-content__actions-likes"
            onClick={handleCommentLike}
          >
            {likes} Likes
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentsArea;
