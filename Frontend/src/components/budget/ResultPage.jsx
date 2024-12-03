import React from "react";
import { useLocation } from "react-router-dom";
import "./ResultsPage.css";
import { pcs } from "../data"; // Ensure the correct path to the data file

const ResultsPage = () => {
  const location = useLocation();
  const { minBudget, maxBudget, type } = location.state || {};

  // Filter PCs based on budget and type
  const filteredPCs = pcs.filter(
    (pc) => pc.price >= minBudget && pc.price <= maxBudget && (!type || pc.type === type)
  );

  return (
    <div>
      <h1>Search Results</h1>
      <p>Budget: {minBudget} TND - {maxBudget} TND</p>
      <p>Type: {type}</p>
      <div className="results-container">
        {filteredPCs.length > 0 ? (
          filteredPCs.map((pc) => (
            <div key={pc.id} className="pc-item">
              <h2>{pc.name}</h2>
              <img src={pc.image} alt={pc.name} />
              <p>Price: {pc.price} TND</p>
              <p>Type: {pc.type}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;

