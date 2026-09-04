import React from 'react'
import { useParams } from 'react-router-dom'
import properties from '../data/properties';
import Container from '../components/Container/Container';
import Section from '../components/Section/Section';

const PropertyDetails = () => {
  const {id} = useParams();
  console.log(id)
  
  const property = properties.find((item) => String(item.id )== String(id))
  console.log(property)
  if (!property) {
    return "property not found"
  }
  return (
    <div style={{color : "white"}}>
      
    <Section className="hero-property">
      <Container>
        <div className="heading-hero"> <div className="title"><h1>{property.title}</h1> <div className='city'>< img  src="/assets/img/Location Icon.png"/> <p>{property.city}</p></div></div>
         <div className="price"><small>Price</small><p>{property.price}</p></div> </div>
        <div className="image-hero"> <img src={property.image} /></div> 
      </Container>
       </Section>
       <Section>
        <Container>
             
       <div className="content-hero">
        <p>{property.description}</p>
       </div>
        </Container>
       </Section>
    </div>
  )
}

export default PropertyDetails
