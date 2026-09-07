import React from 'react'
import Button from '../Button/Button.jsx'
import CostItem from './CostItem.jsx'
import  './PropertyCost.css'

const PropertyCost = ({title, items}) => {
  const rows =[]
  for(let i = 0 ; i< items.length ; i+=2) {rows.push(items.slice(i , i+2))}
  return (
    <div className='property-cost'>
      <div className="title-cost">
        <h2>{title}</h2>
        <Button variant = "secondary">Learn More</Button>
      </div>
      <div className="content-cost">
        {
          rows.map((row,index) => (<div className='row' key={index} style={{borderBottom : index !== rows.length -1 ? "1px solid var(--primary-border)" : "none"}}>
              {row.map ((item) => (
              <CostItem key={item.title} title={item.title} price={item.price} description={item.description} />
       ))}
          </div>))
        }
      
   
      </div>
    </div>
  )
}

export default PropertyCost
 