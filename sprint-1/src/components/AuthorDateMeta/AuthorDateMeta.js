import React from "react";
import "./AuthorDateMeta.scss";
import momentAgo from "../../utils/date";

function AuthorDateMeta(props) {
  const { channel, timestamp } = props;
  return (
    <div className="author-date-meta">
      <span className="author-date-meta__author-info">{channel}</span>
      <span className="author-date-meta__date-info">
        {momentAgo(timestamp)}
      </span>
    </div>
  );
}

export default AuthorDateMeta;
