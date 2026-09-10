import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import smartCardsData from "../../data/SmartCard";

const SmartCards = () => {
  return (
    <div className="smart-cards">
      {smartCardsData.map((card) => (
        <ServiceCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default SmartCards;