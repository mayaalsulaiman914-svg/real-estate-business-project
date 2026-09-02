import React from 'react'
import Hero from '../components/Hero/Hero'

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
      >
      </Hero>
    </div>
  )
}

export default About
