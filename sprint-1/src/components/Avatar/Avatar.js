import React from "react";
import "./Avatar.scss";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";

function Avatar({ additionalClassName }) {
  return (
    <div className="avatar">
      <img
        src={avatarImage}
        alt="AvatarImage"
        className={
          additionalClassName
            ? `avatar__image ${additionalClassName}`
            : "avatar__image"
        }
      />
    </div>
  );
}

export default Avatar;
