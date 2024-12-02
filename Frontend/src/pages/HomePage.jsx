import React, { useState } from "react";
import BudgetSlider from "../components/BudgetSlider";
import TypeSelector from "../components/TypeSelector";
import SearchButton from "../components/SearchButton";
import manImage from "../assets/laptop.png";
import "./HomePage.css"; 

const HomePage = () => {
  const [budget, setBudget] = useState(2000); // Default budget
  const [type, setType] = useState(""); // Default type

  return (
    <div className="homepage">
      <div className="centered-heading">
        <h1>Making Decisions A Bit Easier!</h1>
      </div>
      <div className="content-container">
        <div className="sidebar">
          <BudgetSlider budget={budget} setBudget={setBudget} />
          <TypeSelector type={type} setType={setType} />
          <SearchButton budget={budget} type={type} />
        </div>
        <div className="image-container">
          <img src={manImage} alt="Man with laptop" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
