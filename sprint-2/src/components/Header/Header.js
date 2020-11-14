import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import logoImage from "../../assets/logo/Logo-brainflix.svg";
import Search from "../Search/Search";
import buttonIcon from "../../assets/icons/SVG/Icon-upload.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/" className="header-logo__link">
          <img src={logoImage} alt="logo" className="header-logo__image" />
        </Link>
      </div>
      <Search />
      <div className="header-button-avatar">
        <Link to="/upload" className="upload-button">
          <span className="upload-button__icon">
            <img
              src={buttonIcon}
              className="upload-button__icon-image"
              alt="icon"
            />
          </span>
          <span className="upload-button__text">Upload</span>
        </Link>
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
