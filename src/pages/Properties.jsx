import React, { useState } from 'react'
import Section from '../components/Section/Section'
import properties from '../data/properties'
import Container from '../components/Container/Container'
import PropertyCard from '../components/Slider/PropertyCard'

const Properties = () => {
const[filters , setFilters] = useState({
  search : "",
  type : "all",
  rooms : "all",
  sort:"default",
})
const [currentPage , setCurrentPage] = useState(1)
const propertiesPerPage = 12
const filteredProperties = properties.filter((property) => {
  const matchesSearch =
   property.city.toLowerCase().includes(filters.search.toLowerCase()) || property.title.toLowerCase().includes(filters.search.toLowerCase());
   const matchesType = filters.type === "all" || property.type === filters.type;
   const matchesRoom = filters.rooms === "all" || property.bedrooms === Number(filters.rooms)
   
   return matchesSearch && matchesType && matchesRoom
      }).sort((a,b) => {
        if(filters.sort === "min"){
          return a.price - b.price
        }
        if(filters.sort === "max") {
          return b.price - a.price
        }
        return 0
      })

const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage)
const startIndex = (currentPage - 1) * propertiesPerPage
const currentProperties = filteredProperties.slice(startIndex , startIndex + propertiesPerPage)
 
  return (
    <div>
      <Section className="hero properties">
        <div className="overlay">
          <h1>Search for your perfect property here!</h1>
          <p>find the best properties easily</p>
           <div className="search">
                <img src='/assets/img/search-icon.png' />
                <input type='text' value={filters.search} onChange={(e) => setFilters({...filters , search : e.target.value})}  placeholder='Type here to search..'  />
           </div>
        </div>
      </Section>
           <Section className="container-properties">
          <Container>
              <div className="filter-box">
            <select value={filters.type} onChange={(e) => setFilters({...filters, type : e.target.value})} >
              <option value="all">Property Type</option>
              <option value="villa">Villa</option>
              <option value="shop">Shop</option>
              <option value="office">Office</option>
            </select>
            <select value={filters.rooms} onChange={(e) => setFilters({...filters,rooms : e.target.value})}>
              <option value="all">Bed rooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select value={filters.sort} onChange={(e) => setFilters({...filters, sort : e.target.value})}>
              <option value="default">Sort by price</option>
              <option value="min">Min to max</option>
              <option value="max">Max to min</option>
            </select>
      
           
          </div>
          <div className="properties-list">
             {currentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
             ))}
          </div>
          <div className="number-pages">
            {Array.from({length: totalPages} , (_, index) => (
              <button key={index + 1} onClick={() => setCurrentPage(index+1)} className={currentPage === index + 1 ? "active" : ""}>{index + 1}</button>
            ))}
          </div>
          </Container>
        </Section>
    </div>
  )
}

export default Properties
