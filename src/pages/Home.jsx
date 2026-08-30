import React from 'react'
import properties from '../data/properties.js'
import Section from "../components/Section/Section.jsx"
import Stars from "../components/Stars/Stars.jsx"
import SectionHeading from "../components/SectionHeading/SectionHeading.jsx"
import Container from "../components/Container/Container.jsx"
import PropertySlider from '../components/PropertySlider/PropertySlider.jsx'
import PropertyCard from '../components/PropertyCard/PropertyCard.jsx'

const Home = () => {
  return (
    <div>
      <Section className="properties-section">
        <Container>
           <div className="content-text">
                <Stars />
                <SectionHeading title ={"Featured Properties"} description={`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.`} />
           </div>
            <PropertySlider>
              <div className='cards'>
                 {properties.map((property) => (
                <PropertyCard key={property.id} property={property}  />
              ))}
              </div>
              <div className='icons'>
                <div className="left"><img src='/assets/img/left.png' /></div>
                <div className="righ"><img src='/assets/img/right.png' /></div>
              </div>
            </PropertySlider>


        </Container>
      </Section>
    </div>
  )
}

export default Home
