import React from "react";
import "./Logo.scss";
import logoImage from "../../assets/logo/Logo-brainflix.svg";

function Logo() {
  return (
    <div className="header-logo">
      <a href="/" className="header-logo__link">
        <img src={logoImage} alt="logo" className="header-logo__image" />
      </a>
    </div>
  );
}

export default Logo;
