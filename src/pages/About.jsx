import React from 'react'
import Hero from '../components/Hero/Hero'
import Container from '../components/Container/Container'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import ValueCard from '../components/ValueCard/ValueCard'
import Section from '../components/Section/Section'
import values from '../components/ValueCard/ValueCardData'
import Clients from '../components/Slider/Clients'

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
        imageVariant= "content"
      >
      </Hero>
      <Section className="our-value">
        <Container>
          <div className="values-content">
            <SectionHeading
            showDecoration={true}
            title="Our Values"
            description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
            />
            <ValueCard values={values} />
          </div>
        </Container>
      </Section>
      <Section className="our-value-clients">
        <Container>
          <SectionHeading
            showDecoration={true}
            title="Our Valued Clients"
            description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
            />
            <Clients/>
        </Container>
      </Section>
    </div>
  )
}

export default About
