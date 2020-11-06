import React from "react";
import "./CommentsArea.scss";

function CommentsArea() {
  return (
    <div className="comments-area">
      <div className="comments-area__avatar"></div>
      <div className="comments-content">
        <div className="comments-content__top">
          <span className="comments-content__top-name">Micheal Lyons</span>
          <span className="comments-content__top-date">12/18/2018</span>
        </div>
        <article className="comments-content__main">
          They BLEW the ROOF off at their last show, once everyone started
          figuring out they were going. This is still simply the greatest
          opening of a concert I have EVER witnessed.
        </article>
      </div>
    </div>
  );
}

export default CommentsArea;
