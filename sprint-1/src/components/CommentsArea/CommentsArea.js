import React from "react";
import "./CommentsArea.scss";
import momentsAgo from "../../utils/date";

function CommentsArea(props) {
  const { name, date, comment } = props.comment;
  return (
    <div className="comments-area">
      <div className="comments-area__avatar"></div>
      <div className="comments-content">
        <div className="comments-content__top">
          <span className="comments-content__top-name">{name}</span>
          <span className="comments-content__top-date">{momentsAgo(date)}</span>
        </div>
        <article className="comments-content__main">{comment}</article>
      </div>
    </div>
  );
}

export default CommentsArea;
