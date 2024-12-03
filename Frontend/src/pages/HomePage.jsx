import React, { useState } from "react";
import BudgetSlider from "../components/budget/BudgetSlider";
import TypeSelector from "../components/budget/TypeSelector";
import SearchButton from "../components/budget/SearchButton";
import manImage from "../assets/laptop.png";
import "./HomePage.css"; 

const HomePage = () => {
  const [minBudget, setMinBudget] = useState(1000); // Default min budget
  const [maxBudget, setMaxBudget] = useState(3000); // Default max budget
  const [type, setType] = useState(""); // Default type

  return (
    <div className="homepage">
      <div className="centered-heading">
        <h1>Making Decisions A Bit Easier!</h1>
      </div>
      <div className="content-container">
        <div className="sidebar">
          <BudgetSlider 
            minBudget={minBudget} 
            setMinBudget={setMinBudget} 
            maxBudget={maxBudget} 
            setMaxBudget={setMaxBudget} 
          />
          <TypeSelector type={type} setType={setType} />
          <SearchButton minBudget={minBudget} maxBudget={maxBudget} type={type} />
        </div>
        <div className="image-container">
          <img src={manImage} alt="Man with laptop" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
