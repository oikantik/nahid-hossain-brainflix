import React from "react";
import "./SuccessMessage.scss";

function SuccessMessage(props) {
  return <span className="success-message">{props.message}</span>;
}

export default SuccessMessage;
