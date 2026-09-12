import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PropertiesDashboard = () => {
  const [properties , setProperties] = useState([])
  const navigate = useNavigate()
  useEffect (() => {const storedProperties = JSON.parse(localStorage.getItem('properties')) || []
    setProperties(storedProperties)
  } , [])
  const handleDelete =(id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this propert?')
    if (!confirmDelete) return 
    const updateProperties = properties.filter((property) => String(property.id) !== String(id))
    localStorage.setItem('properties' , JSON.stringify(updateProperties))
    setProperties(updateProperties)
  }
  return (
     <div>
      <h2>Properties</h2>
      <p>Manage your properties here.</p>
      <button onClick={() => navigate (`/dashboard/properties/add`)}>Add Property</button>
       <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {properties.map((property) => (
             <tr key={property.id} onClick={()=> navigate(`/dashboard/properties/${property.id}`)} style={{cursor : "pointer"}}>
                <td>{property.id}</td>
                <td ><img src={property.image} style={{width : "50px" , height : "50px"}} /></td>
                <td>{property.title}</td>
                <td>{property.price}</td>
                <td>{property.type}</td>
                <td>Available</td>
                <td onClick={(e) => e.stopPropagation()}>
                  <button onClick={()=> navigate(`/dashboard/properties/${property.id}?edit=true`)}>Edit</button>
                  <button onClick={()=> handleDelete(property.id)}>Delete</button>
                
                </td>
            </tr>
      ))}
        </tbody>
       </table>
    </div>
  )
}

export default PropertiesDashboard
