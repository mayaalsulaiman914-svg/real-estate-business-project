import React from 'react'
import Button from '../Button/Button.jsx'
import CostItem from './CostItem.jsx'
import  './PropertyCost.css'

const PropertyCost = ({title, items}) => {
  return (
    <div className='property-cost'>
      <div className="title-cost">
        <h2>{title}</h2>
        <Button variant = "secondary">Learn More</Button>
      </div>
      <div className="content-cost">
       {items.map ((item) => (
        <CostItem key={item.title} title={item.title} price={item.price} description={item.description} />
       ))}
       <div className="diveder one"></div>
       <div className="diveder two"></div>
      </div>
    </div>
  )
}

export default PropertyCost
 