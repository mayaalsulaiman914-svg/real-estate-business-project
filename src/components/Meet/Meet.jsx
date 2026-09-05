import React from "react";
import Section from "../Section/Section.jsx";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import Container from "../Container/Container.jsx";
import meet from "../../data/Meet.js";
import "./Meet.css";
import MeetCard from "./MeetCard.jsx";

const Meet = () => {
  return (
    <Section className="meet-section">
      <Container>
        <div className="meet-content">
          <SectionHeading showDecoration={true}
            title="Meet the Estatein Team"
            description="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality." />
          <div className="meet-cards">
            {meet.map((person) => (
              <MeetCard
                key={person.id}
                name={person.name}
                jobTitle={person.jobTitle}
                image={person.image}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Meet;