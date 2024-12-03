import React from "react";
import ReactSlider from "react-slider";
import "./BudgetSlider.css"; // Ensure the correct path to the CSS file

const BudgetSlider = ({ minBudget, setMinBudget, maxBudget, setMaxBudget, min = 500, max = 3850 }) => {
  const handleSliderChange = (values) => {
    setMinBudget(values[0]);
    setMaxBudget(values[1]);
  };

  return (
    <div className="budget-slider-container">
      <label>What Is Your Budget Range?</label>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        min={min}
        max={max}
        value={[minBudget, maxBudget]}
        onChange={handleSliderChange}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        ariaValuetext={state => `Thumb value ${state.valueNow}`}
      />
      <p>Selected Budget Range: {minBudget} TND - {maxBudget} TND</p>
    </div>
  );
};

export default BudgetSlider;
