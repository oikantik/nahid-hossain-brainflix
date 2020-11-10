import React from "react";
import "./Logo.scss";
import logoImage from "../../assets/logo/Logo-brainflix.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="header-logo">
      <Link to="/" className="header-logo__link">
        <img src={logoImage} alt="logo" className="header-logo__image" />
      </Link>
    </div>
  );
}

export default Logo;
