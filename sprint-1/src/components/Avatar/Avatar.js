import React from "react";
import "./Avatar.scss";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";

function Avatar(props) {
  return (
    <div className="avatar">
      <img
        src={avatarImage}
        alt="AvatarImage"
        className={
          props.additionalClassName
            ? `avatar__image ${props.additionalClassName}`
            : "avatar__image"
        }
      />
    </div>
  );
}

export default Avatar;
