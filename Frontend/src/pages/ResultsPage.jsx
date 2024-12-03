import React from "react";
import { useLocation } from "react-router-dom";
import PCItem from "../../src/components/data/PCItem.jsx"; // Reusable component
import "./resultsPage.css"; // Styling
const ResultsPage = () => {
  const location = useLocation();
  const { minBudget = 0, maxBudget = Infinity, type = "All", filteredPCs = [] } = location.state || {};

  const finalFilteredPCs = filteredPCs.filter(
    (pc) => pc.price >= minBudget && pc.price <= maxBudget && (type === "All" || pc.type === type)
  );

  return (
    <div className="results-page">
      <h1>Search Results</h1>
      <p>Budget: {minBudget} TND - {maxBudget} TND</p>
      <p>Type: {type}</p>
      <div className="results-container">
        {finalFilteredPCs.length > 0 ? (
          finalFilteredPCs.map((pc) => <PCItem key={pc.id} pc={pc} />)
        ) : (
          <p className="no-results">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;
