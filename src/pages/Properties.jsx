import React, { useEffect, useState } from 'react'
import Section from '../components/Section/Section'
import Container from '../components/Container/Container'
import PropertyCard from '../components/Slider/PropertyCard'

const Properties = () => {

const [properties , setProperties] = useState([])
useEffect(() => {
  const data = JSON.parse(localStorage.getItem("properties")) || []
  setProperties(data)

},[])
const[filters , setFilters] = useState({
  search : "",
  type : "all",
  bedrooms : "all",
  bathrooms : "all",
  sort:"default",
})
const [animateCards , setAnimateCards] = useState(0)
const [currentPage , setCurrentPage] = useState(1)
useEffect(() => {
  setCurrentPage(1)
},[filters])

const getPrice = (price) => {
  return Number (String(price).replace(/[$,]/g,""))
}

const propertiesPerPage = 12
const filteredProperties = properties.filter((property) => {
  const matchesSearch = property.city.toLowerCase().includes(filters.search.toLowerCase()) || property.title.toLowerCase().includes(filters.search.toLowerCase());
   const matchesType = filters.type === "all" || property.type.toLowerCase() === filters.type;
   const matchesBedRoom = filters.bedrooms === "all" || Number(property.bedrooms) === Number(filters.bedrooms)
   const matchesBathRoom = filters.bathrooms === "all" || Number(property.bathrooms) === Number(filters.bathrooms)
   
   return matchesSearch && matchesType && matchesBedRoom && matchesBathRoom
      }).sort((a,b) => {
        if(filters.sort === "min"){
          return getPrice(a.price) - getPrice(b.price)  
        }
        if(filters.sort === "max") {
          return getPrice(b.price) - getPrice(a.price)
        }
        return 0
      })

const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage)
const startIndex = (currentPage - 1) * propertiesPerPage
const currentProperties = filteredProperties.slice(startIndex , startIndex + propertiesPerPage)
  return (
    <div className="properties-page">
      <Section  className="properties-hero">
        <div className='hero'>
             <Container>
            <h1>Explore Our Properties</h1>
            <p>Discover carefully selected properties designed to match your lifestyle , needs , and vision.</p>
            <div className="circle"></div>
           <div className="search">
                <img src='/assets/img/search-icon.png' />
                <input type='text' value={filters.search} onChange={(e) => setFilters({...filters , search : e.target.value})}  placeholder='Search by location , city , property name...'  />
           </div>
         </Container>  
        </div> 
      </Section>
           <Section className="container-properties" id="properties">
          <Container>
              <div className="filter-box">
            <button onClick={() => {setFilters ({search :"" ,type: "all" , bedrooms : "all" , bathrooms : "all" ,sort:"default"})}}>All properties</button>
            <select value={filters.type} onChange={(e) => setFilters({...filters, type : e.target.value})} >
              <option value="all">Property Type</option>
              <option value="villa">Villa</option>
              <option value="shop">Shop</option>
              <option value="office">Office</option>
            </select>
            <select value={filters.bedrooms} onChange={(e) => setFilters({...filters, bedrooms : e.target.value})}>
              <option value="all">Bed rooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <select value={filters.bathrooms} onChange={(e) => setFilters({...filters, bathrooms : e.target.value})}>
              <option value="all">Bath rooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <select value={filters.sort} onChange={(e) => setFilters({...filters, sort : e.target.value})}>
              <option value="default">Sort by price</option>
              <option value="min">Min to max</option>
              <option value="max">Max to min</option>
            </select>
      
           
          </div>
          <div className="properties-list" key={animateCards}>
             {currentProperties.map((property , index) => (
              <div className={"property-animation"} key={property.id} style={{animationDelay : `${index * 0.1}s`}}>
                 <PropertyCard showRooms={false}  property={property} />
              </div>
 
             ))}
          </div>
          <div className="number-pages">
            {Array.from({length: totalPages} , (_, index) => (
              <button key={index + 1} onClick={() => { setCurrentPage(index+1) 
                setAnimateCards(prev => prev +1)}}
                 className={currentPage === index + 1 ? "active" : ""}>{index + 1}</button>
            ))}
          </div>
          </Container>
        </Section>
    </div>
  )
}

export default Properties
