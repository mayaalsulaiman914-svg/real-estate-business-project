import React from 'react'
import { useParams } from 'react-router-dom'
import properties from '../data/properties';

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
      <h1>hello from property</h1>
      <p>{property.title}</p>
      <p>{property.description}</p>
      <img src={property.image} />
    </div>
  )
}

export default PropertyDetails
