import React from "react";
import "./pcItem.css"; // Adjusted path to CSS

const PCItem = ({ pc }) => {
  return (
    <div className="pc-item">
      <h2>{pc.name}</h2>
      <img src={pc.image} alt={pc.name} />
      <p>Price: {pc.price} TND</p>
      <p>Type: {pc.type}</p>
    </div>
  );
};

export default PCItem;