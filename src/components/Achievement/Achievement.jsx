import React from "react";
import "./Achievement.css";

const Achievement = ({ title, description }) => {
  return (
    <div className="card achievement-card">
      <h2>{title}</h2>
      <p className="desc">{description}</p>
    </div>
  );
};

export default Achievement;