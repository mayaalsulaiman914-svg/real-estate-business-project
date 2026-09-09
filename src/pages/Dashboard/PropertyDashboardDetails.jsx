import React from 'react'
import { useParams } from 'react-router-dom'

const PropertyDashboardDetails = () => {
const {id} = useParams()
  return (
    <div>
      <h1>property daetails</h1> 
      <p>propert id: {id}</p>
    </div>
  )
}

export default PropertyDashboardDetails
