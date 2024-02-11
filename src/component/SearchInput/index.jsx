import React from "react";
import "./index.scss";

const SearchInput = ({
  placeholder = "Search for creators ... ",
  onChange = () => {},
}) => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
