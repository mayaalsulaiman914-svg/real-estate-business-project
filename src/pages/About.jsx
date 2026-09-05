import React from 'react'
import Hero from '../components/Hero/Hero'
import Section from "../components/Section/Section.jsx";
import SectionHeading from "../components/SectionHeading/SectionHeading.jsx";
import Container from "../components/Container/Container.jsx";
import achievements from "../data/Achievement.js";
import Achievement from "../components/Achievement/Achievement.jsx";
import "./About.css";
import NavigatingSection from '../components/NavigatingSection/NavigatingSection'
const About = () => {
  return (
    <div>
      <Hero 
        showDecoration= {true}
        title="Our Journey"
        description="Our story is one of continuous growth and evolution.
        We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach,
        forged valuable partnerships, and gained the trust of countless clients."
        image = "/assets/img/hero2 page2.png"
        imageVariant= "content">
      </Hero>
      <Section className="about-section">
       <Container>
        <div className="content-text">
          <SectionHeading showDecoration={true}
          title="Our Achievements"
          description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."/>
       </div>
       <div className="achievements-container">
       {achievements.map((achievement) => (
        <Achievement
          key={achievement.id}
          title={achievement.title}
          description={achievement.description} />
        ))}
      </div>
      </Container>
      </Section>
      <NavigatingSection/>
    </div>
  )
}

export default About
