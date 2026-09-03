import Button from "../Button/Button.jsx"
import { Link} from 'react-router-dom'
import './PropertyCard.css'

const PropertyCard = ({property}) => {
  return (
    <div className='card property-card'>
      <div className="image"> <img className='image-card' src={property.image} /></div>
     <h2>{property.title}</h2>
     <p className='desc'>{property.description.slice(0,68)}..<Link to={`/PropertyDetails/${property.id}`}>Read more</Link></p>
     <div className='container-room'><div className='back'><img src='/assets/img/bed Icon.png' /> <p>{property.bedrooms}-Bedroom</p></div> <div className='back'> <img src='assets/img/bathroom Icon (1).png' /> <p>{property.bathrooms}-Bathroom</p></div> <div className='back'><img src='/assets/img/villa Icon (2).png' /> <p>{property.type}</p></div></div>
     <div className='content'><div><small>Price</small><p>{property.price}</p></div>
      <Link to={`/PropertyDetails/${property.id}`} className="btn" >View Property Details</Link>
     </div>
    </div>
  )
}

export default PropertyCard
