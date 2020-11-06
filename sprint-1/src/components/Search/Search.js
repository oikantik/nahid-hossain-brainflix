import React from "react";
import "./Search.scss";

function Search() {
  return (
    <form className="header-search">
      <div className="header-search__input-icon">
        <input
          type="text"
          name="search"
          className="header-search__input"
          placeholder="Search"
        />
        <span className="header-search__icon"></span>
      </div>
    </form>
  );
}

export default Search;
