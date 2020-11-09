import React from "react";
import "./Logo.scss";
import logoImage from "../../assets/logo/Logo-brainflix.svg";

function Logo() {
  return (
    <div className="header-logo">
      <img src={logoImage} alt="logo" className="header-logo__image" />
    </div>
  );
}

export default Logo;
