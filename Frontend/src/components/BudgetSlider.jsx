import React from "react";
import "./BudgetSlider.css"; // Ensure the correct path to the CSS file

const BudgetSlider = ({ budget, setBudget }) => {
  const handleSliderChange = (e) => {
    setBudget(e.target.value);
  };

  return (
    <div className="budget-slider-container">
      <label>What Is Your Budget?</label>
      <input
        type="range"
        min="500"
        max="3850"
        value={budget}
        onChange={handleSliderChange}
      />
      <p>Selected Budget: {budget} TND</p>
    </div>
  );
};

export default BudgetSlider;
