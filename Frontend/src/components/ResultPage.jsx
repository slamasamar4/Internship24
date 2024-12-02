import React from "react";
import { useLocation } from "react-router-dom";
import "./ResultsPage.css";


const ResultsPage = () => {
  const location = useLocation();
  const { budget, type } = location.state || {};

  return (
    <div>
      <h1>Search Results</h1>
      <p>Budget: {budget} TND</p>
      <p>Type: {type}</p>
      <p>
        Display results here based on budget and type.
      </p>
    </div>
  );
};

export default ResultsPage;
