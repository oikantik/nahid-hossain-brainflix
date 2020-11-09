import React from "react";
import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import UploadButton from "../UploadButton/UploadButton";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Search />
      <div className="header-button-avatar">
        <UploadButton />
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
