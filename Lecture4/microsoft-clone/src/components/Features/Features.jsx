import React from "react";
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import "./Features.css";

const cardLinks = [
  "Shop Surface devices",
  "Discover Surface Pro",
  "Explore Surface Laptop",
  "Compare all devices",
  "Surface for Business",
];

const Features = () => {
  return (
    <div className="features-wrapper">
      {cardLinks.map((card, index) => (
        <FeaturesCard key={index} linkText={card} />
      ))}
    </div>
  );
};

export default Features;
