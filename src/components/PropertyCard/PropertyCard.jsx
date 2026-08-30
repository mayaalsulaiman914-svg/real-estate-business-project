import React from 'react'
import './PropertyCard.css'
import Button from "../Button/Button.jsx"
import { Link } from 'react-router-dom'

const PropertyCard = ({property}) => {
    console.log(property)
  return (
    <div className='card'>
     <img className='image-card' src={property.image} />
     <h2>{property.title}</h2>
     <p className='desc'>{property.description.slice(0,68)}..<Link to={`/PropertyDetails/${property.id}`}>Read more</Link></p>
     <div className='container-room'><div className='back'><img src='/assets/img/bed Icon.png' /> <p>{property.bedrooms}-Bedroom</p></div> <div className='back'> <img src='assets/img/bathroom Icon (1).png' /> <p>{property.bathrooms}-Bathroom</p></div> <div className='back'><img src='/assets/img/villa Icon (2).png' /> <p>{property.type}</p></div></div>
     <div className='content'><div><small>price</small><p>{property.price}</p></div>
          <Button>View Property Details</Button>
     </div>
    </div>
  )
}

export default PropertyCard
