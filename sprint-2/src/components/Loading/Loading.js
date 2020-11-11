import React from "react";
import "./Loading.scss";

function Loading(props) {
  return (
    <div className="loading-screen">
      <span className="loading-screen__icon"></span>
      <h1 className="loading-screen__headline">Loading {props.message}...</h1>
    </div>
  );
}

export default Loading;
