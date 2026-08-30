import React from 'react'
import Hero from '../components/Hero/Hero'
import QuickServices from '../components/QuickServices/QuickServices'

const Home = () => {
  return (
    <div>
      <Hero 
        title="Discover Your Dream Property with Estatein"
        description="Your journey to finding the perfect property 
        begins here. Explore our listings to find the home that matches your dreams."
        secondaryButtonText ="Learn More"
        primaryButtonText = "Browse Properties"
        image = "/assets/img/hero1.png"
      >
        <QuickServices/>
      </Hero>
    </div>
  )
}

export default Home
