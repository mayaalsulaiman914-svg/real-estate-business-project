import React from "react";
import "./MeetCard.css";

const MeetCard = ({ name, jobTitle, image }) => {
  return (
    <div className="meet-card">
      <div className="meet-image-wrapper">
        <img src={image} alt={name} className="meet-person-image" />
        <img src="/assets/img/BlueTwitterButton.png" alt="Twitter" className="meet-twitter-icon" />
      </div>
      <h2 className="meet-name">{name}</h2>
      <p className="meet-job">{jobTitle}</p>
      <div className="meet-contact">
        <img src="/assets/img/Say Hello.png" alt="Welcome" className="meet-welcome"/>
        <img src="/assets/img/BlueTelegram.png" alt="Telegram" className="meet-telegram"/>
      </div>
    </div>
  );
};

export default MeetCard;