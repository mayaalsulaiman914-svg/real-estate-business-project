import React, { useEffect, useState } from 'react'
import './PropertySlider.css'
import PropertyCard from './PropertyCard'

const PropertySlider = () => {
 const [properties , setProperties] = useState([])
 const [currentSlide , setCurrentSlide] = useState(0)
   const cards = properties.length;
   console.log(cards)
 useEffect(() => {
  const data = localStorage.getItem("properties");
  if (data) {
    setProperties(JSON.parse(data)) 
  }
 },[])
 

const desktopSlides = [];
for (let i=0 ; i < properties.length ; i +=3) {desktopSlides.push(properties.slice(i , i + 3))}
const mobileSlides = properties;
 
  const nextSlide = () => {
    setCurrentSlide((prev) => {

      if (window.innerWidth <= 992) {
         if (prev >=  mobileSlides.length-1) {
        return 0;
      }
      return prev + 1;
      }

      if(prev >= desktopSlides.length -1) {
        return 0;
      }
      return prev + 1 ;
      
    })
  }
 const prevSlide = () => {
    setCurrentSlide((prev) => {
       if(window.innerWidth <= 992) {
         if(prev <=0) {
          return mobileSlides.length-1
         }
         return prev - 1
       }
       if(prev <= 0) {
        return desktopSlides.length - 1
       }
       return prev -1
    })
  }
  return (
    <div className="property-slider">
        <div className="desktop-slider">
       <div className="slider-window">
          <div className="slider-track" style={{transform : `translateX(-${currentSlide * 100}%)`}}>
                {desktopSlides.map((slide , index) => (
                  <div className="slide" key={index}>
                    {slide.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                ))}
          </div>
        </div>
        </div>
        <div className="mobile-slider">
       <div className="slider-window">
          <div className="slider-track" style={{transform : `translateX(-${currentSlide * 100}%)`}}>
                {mobileSlides.map((property , index) => (
                  <div className="slide" key={index}>
                      <PropertyCard key={property.id} property={property} />
                   
                  </div>
                ))}
          </div>
        </div>
        </div>
      
        <div className="icons">
          <button className='prev' onClick={prevSlide}><img src='/assets/img/left.png' /></button>
          <button className='next' onClick={nextSlide}><img src='/assets/img/right.png' /></button>
        </div>

    </div>
  )
}

export default PropertySlider