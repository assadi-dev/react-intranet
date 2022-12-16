import React, { useEffect, useState, useRef } from "react";
import { SearchBarContainer } from "./ListCollaborateur.styled";

const SearchBar = ({ getSearchTerm, ...props }) => {
  const searchInputRef = useRef();

  const handleSearch = (e) => {
    const value = e.target.value;
    getSearchTerm(value);
  };

  useEffect(() => {
    let input = searchInputRef.current.querySelector("input");

    const setFocus = () => {
      searchInputRef.current.classList.add("focus");
    };
    const unsetFocus = () => {
      searchInputRef.current.classList.remove("focus");
    };

    input.addEventListener("focus", setFocus);
    input.addEventListener("blur", unsetFocus);

    return () => {
      input.removeEventListener("focus", setFocus);
      input.removeEventListener("blur", unsetFocus);
    };
  }, []);

  return (
    <>
      {" "}
      <SearchBarContainer ref={searchInputRef}>
        <input
          type="text"
          name="term"
          placeholder="Rechercher"
          {...props}
          onChange={handleSearch}
        />
      </SearchBarContainer>
    </>
  );
};

export default SearchBar;
