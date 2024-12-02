import React from "react";
import laptopImage from "../assets/laptop.png"; // Replace with the correct path to your image
import desktopImage from "../assets/DesktopImage.jpg"; // Replace with the correct path to your image
import toolsImage from "../assets/toolsImage.jpg"; // Replace with the correct path to your image
import "./TypeSelector.css"; // Ensure the correct path to the CSS file

const TypeSelector = ({ type, setType }) => {
  const types = [
    { name: "Laptop", image: laptopImage },
    { name: "Desktop", image: desktopImage },
    { name: "Tools", image: toolsImage },
  ];

  return (
    <div className="type-selector">
      <label>Search By Type</label>
      <div className="type-images">
        {types.map((item) => (
          <img
            key={item.name}
            src={item.image}
            alt={item.name}
            onClick={() => setType(item.name)}
            className={type === item.name ? "selected" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default TypeSelector;
