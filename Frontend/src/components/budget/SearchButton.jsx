import React from "react";
import { useNavigate } from "react-router-dom";
import { pcs } from "../data/data";

const SearchButton = ({ minBudget, maxBudget, type }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    // Filter PCs based on the selected type
    const filteredPCs = pcs.filter(pc => pc.type === type);

    navigate("/results", { state: { minBudget, maxBudget, type, filteredPCs } });
  };

  return <button onClick={handleSearch}>Search</button>;
};

export default SearchButton;
