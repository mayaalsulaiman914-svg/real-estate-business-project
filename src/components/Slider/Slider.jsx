import React, { useEffect, useState } from 'react'
import './Slider.css'
import './Card.css'
 

const Slider = ({items , renderItem, desktopItemsPerSlide = 3, gap=20}) => {
 
const [currentSlide , setCurrentSlide] = useState(0)
const cards = items.length;
 
const desktopSlides = [];
for (let i=0 ; i < items.length ; i +=desktopItemsPerSlide) {desktopSlides.push(items.slice(i , i + desktopItemsPerSlide))}

const mobileSlides = items;
 
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
    <div className="slider" style={{"--items-per-slide": desktopItemsPerSlide, "--slide-gap": `${gap}px`}}>
        <div className="desktop-slider">
         <div className="slider-window">
          <div className="slider-track" style={{transform : `translateX(-${currentSlide * 100}%)`}}>
                {desktopSlides.map((slide , index) => (
                  <div className="slide" key={index}>
                    {slide.map((item) => (
                      <div key={item.id}>
                      {renderItem(item)} 
                   
                  </div>
                    ))}
                    </div>
                ))}
          </div>
        </div>
        </div>
      <div className="mobile-slider">
        <div className="slider-window">
          <div className="slider-track" style={{transform : `translateX(-${currentSlide * 100}%)`}}>
                {mobileSlides.map((item) => (
                  <div className="slide" key={item.id}>
                      {renderItem(item)} 
                   
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

export default Slider