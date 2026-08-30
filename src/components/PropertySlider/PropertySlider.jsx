import React, { useEffect, useState } from 'react'
import './PropertySlider.css'
import PropertyCard from '../PropertyCard/PropertyCard'

const PropertySlider = ({properties}) => {
const [currentIndex , setCurrentIndex] = useState(0)
const [cardsPerSlide , setCardsPerSlide] = useState(3)
useEffect (() => {
  const handleResize =() => {
    if (window.innerWidth <= 992) {setCardsPerSlide(1)}
    else {setCardsPerSlide(3)}
  }
  handleResize()
  window.addEventListener("resize" , handleResize)
  return () => {
    window.removeEventListener("resize" , handleResize)}
  
},[])
useEffect(()=>{
  setCurrentIndex(0)
},[cardsPerSlide])

  const slides = [];

  for (let i = 0; i < properties.length; i += cardsPerSlide) {
    slides.push(properties.slice(i, i + cardsPerSlide));
  }

  const nextSlide = () => {
    setCurrentIndex((index) =>
      index === slides.length - 1 ? 0 : index + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((index) =>
      index === 0 ? slides.length - 1 : index - 1
    );
  };

/* const nextSlide = () => {
  setCurrentIndex((index) => {
    if(index === properties.length -1) {
      return 0
    }
    return index + 1
  })
}

const prevSlide = () => {
  setCurrentIndex((index) => {
    if (index === 0) {
      return properties.length -1
    }
    return index - 1
  })
} */
  return (
    <div className='property-slider'>
         <div className="slider-window">
                <div className='slider-track' style={{transform : `translateX(-${currentIndex * 100}%)`}}>
                    {slides.map((slide, index) => (
            <div className="slider-slide" key={index}>
              {slide.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ))}
            </div>
          ))}
             
              </div>
               </div>
               <div className='icons'>
                <button className="left" onClick={prevSlide}> <img src='/assets/img/left.png' /></button>
                <button className="right"     onClick={nextSlide}> <img src='/assets/img/right.png' /></button>
              </div>
    </div>
  )
}

export default PropertySlider
