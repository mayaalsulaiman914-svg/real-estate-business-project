import React, { useEffect, useState } from 'react'
import properties from '../data/properties.js'
import Section from "../components/Section/Section.jsx"
import SectionHeading from "../components/SectionHeading/SectionHeading.jsx"
import Container from "../components/Container/Container.jsx"
import Slider from '../components/Slider/Slider.jsx'
import PropertyCard from '../components/Slider/PropertyCard.jsx'
import Hero from '../components/Hero/Hero'
import QuickServices from '../components/QuickServices/QuickServices'
import clients from "../data/clients.js"
import ClientCard from '../components/Slider/ClientCard.jsx'
import faqs from "../data/FaqSlider.js"
import FaqSlider from "../components/Slider/FaqSlider.jsx"

const Home = () => {
 
  const [propertyList , setPropertyList] = useState([]);
  useEffect(()=> {
  const storedProperties = localStorage.getItem("properties")
  if(storedProperties) {
  setPropertyList(JSON.parse(storedProperties));}
  else {
     localStorage.setItem("properties" , JSON.stringify(properties))
     setPropertyList(properties)
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
                <SectionHeading showDecoration= {true}
                title ={"Featured Properties"}
                description={`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.`} />
            </div>
            <Slider items={propertyList} renderItem ={(property) => (<PropertyCard property={property} />)}>
              
            </Slider>
        </Container>
      </Section>
      <Section className="testimonials-section" id="Testimonials">
        <Container>
            <div className="content-text">
                <SectionHeading showDecoration= {true}
                title ={"What Our Clients Say"}
                description={`Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.`} />
            </div>
            <Slider items={clients} renderItem ={(client) => (<ClientCard client={client} />)}>
              
            </Slider>
            

 
        </Container>
      </Section>
      <Section className="faq-section" id="faq">
  <Container>

    <div className="content-text">
      <SectionHeading showDecoration={true}
        title="Frequently Asked Questions"
        description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."/>
    </div>
    <Slider items={faqs} renderItem={(faq) => <FaqSlider faq={faq} />}/>
  </Container>
</Section>
  
    </div>
  )
}

export default Home
