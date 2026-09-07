import React from 'react'
import './CostItem.css'

const CostItem = ({title ,price, description}) => {
  return (
    <div className='cost-item'>
      <p className='title'>{title}</p>
      <div className="content">
        <h3>{price}</h3>
        <p className='desc'>{description}</p>
      </div>
    </div>
  )
}

export default CostItem
