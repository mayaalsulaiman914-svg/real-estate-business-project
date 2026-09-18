import Button from "../Button/Button.jsx"
import { Link, useNavigate} from 'react-router-dom'
import './PropertyCard.css'
import { useState } from "react"

const PropertyCard = ({property ,showdesc= true, showRooms = true , showCity = false}) => {
const [showMore , setShowMore] = useState(false)
const navigate = useNavigate();

  return (
    <div className='card property-card' onClick={() => navigate(`/PropertyDetails/${property.id}`)}>
      <div className="image"> <img className='image-card' src={property.image} /></div>
       {showCity && (<p className="city">{property.city}</p>)}
       <h2>{property.title}</h2>
       {showdesc && ( <div className="desc" onClick={(e) =>{e.preventDefault() ; e.stopPropagation()}}>
       <p>{showMore ? property.description : (<>{property.description.slice(0,68)}...{""}<button onClick={(e)=>{e.preventDefault() , e.stopPropagation() ,setShowMore(true)}  }>Read more</button></>) } {showMore && (<button onClick={()=> setShowMore(false)}>show less</button>)}</p>
       </div>)}
      {showRooms && (<div className='container-room'><div className='back'><img src='/assets/img/bed Icon.png' /> <p>{property.bedrooms}-Bedroom</p></div> <div className='back'> <img src='/assets/img/bathroom Icon (1).png' /> <p>{property.bathrooms}-Bathroom</p></div> <div className='back'><img src='/assets/img/villa Icon (2).png' /> <p>{property.type}</p></div></div>)} 
      <div className='content'><div><small>Price</small><p>{property.price}</p></div>
      <button className="btn" >View Property Details</button>
     </div>
     </div>
  )
}

export default PropertyCard
