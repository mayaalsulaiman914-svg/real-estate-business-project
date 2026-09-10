import React, { useEffect, useState } from 'react'

const PropertiesDashboard = () => {
  const [properties , setProperties] = useState([])
  useEffect (() => {const storedProperties = JSON.parse(localStorage.getItem('properties')) || []
    setProperties(storedProperties)
  } , [])
  return (
     <div>
      <h2>Properties</h2>
      <p>Manage your properties here.</p>
      {properties.map((property) => (
        <div key={property.id}>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
        </div>
      ))}
    </div>
  )
}

export default PropertiesDashboard
