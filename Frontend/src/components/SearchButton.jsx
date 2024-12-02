import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchButton.css"; // Ensure the correct path to the CSS file

const SearchButton = ({ budget, type }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/results", { state: { budget, type } });
  };

  return (
    <button className="search-button" onClick={handleSearch}>
      Search
    </button>
  );
};

export default SearchButton;
