import React from "react";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const { budget, type } = location.state || {};

  // Mocked data for display purposes
  const results = [
    { id: 1, name: "Laptop A", price: 1500, type: "Laptop" },
    { id: 2, name: "PC B", price: 2000, type: "Desktop" },
    { id: 3, name: "Headphone X", price: 100, type: "Tools" },
  ];

  const filteredResults = results.filter(
    (item) => item.price <= budget && item.type === type
  );

  return (
    <div>
      <h1>Search Results</h1>
      <p>Budget: {budget} TND</p>
      <p>Type: {type}</p>
      <div>
        {filteredResults.length > 0 ? (
          filteredResults.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: {item.price} TND</p>
            </div>
          ))
        ) : (
          <p>No results match your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
