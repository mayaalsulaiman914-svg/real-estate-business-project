import React from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
import SectionHeading from "../SectionHeading/SectionHeading";
import ServiceCTA from "../ServiceCTA/ServiceCTA";
import Button from "../Button/Button";
import SmartCards from "./SmartCards";
import "./Smart.css";

const Smart = () => {
  return (
    <Section className="smart">
      <Container>
        <div className="smart-content">
          <div className="smart-left">
            <SectionHeading
              showDecoration={true}
              title="Smart Investments, Informed Decisions"
              description="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."/>

            <div className="service-cta smart-cta">
                <div className="smart-cta-content">
                    <h2>Unlock Your Investment Potential</h2>

                    <p>
                        Explore our Property Management Service categories and let us handle
                        the complexities while you enjoy the benefits of property ownership.
                    </p>

                    <Button variant="secondary"> Learn More</Button>
                </div>
            </div>
          </div>
          <SmartCards />
        </div>
        
        </Container>
    </Section>
    );
};
export default Smart;