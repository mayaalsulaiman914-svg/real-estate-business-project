import React, { useEffect, useState } from 'react'
import properties from '../data/properties.js'
import Section from "../components/Section/Section.jsx"
import Stars from "../components/Stars/Stars.jsx"
import SectionHeading from "../components/SectionHeading/SectionHeading.jsx"
import Container from "../components/Container/Container.jsx"
import PropertySlider from '../components/PropertySlider/PropertySlider.jsx'
import PropertyCard from '../components/PropertySlider/PropertyCard.jsx'
import Hero from '../components/Hero/Hero'
import QuickServices from '../components/QuickServices/QuickServices'

const Home = () => {
  const [propertiesList , setPropertyList] = useState([]);
  useEffect(() => {
    localStorage.setItem("properties" , JSON.stringify(properties));
  },[])
  useEffect(()=> {
  const storedProperties = localStorage.getItem("properties")
  if(storedProperties) {
  setPropertyList(JSON.parse(storedProperties));
  }
 
  },[])
 
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
      <Section className="properties-section" id="properties">
        <Container>
           <div className="content-text">
                <Stars />
                <SectionHeading title ={"Featured Properties"} description={`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.`} />
           </div>
            <PropertySlider properties={propertiesList}>
             
            </PropertySlider>
            


        </Container>
      </Section>
  
    </div>
  )
}

export default Home
