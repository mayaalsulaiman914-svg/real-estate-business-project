import React, { useEffect, useState } from 'react'
import './PropertySlider.css'
import PropertyCard from '../PropertyCard/PropertyCard'

const PropertySlider = ({ properties }) => {

  // جلب البيانات من localStorage
  const [savedProperties, setSavedProperties] = useState(() => {
    const saved = localStorage.getItem('properties')

    return saved ? JSON.parse(saved) : properties
  })

  // تخزين البيانات
  useEffect(() => {
    localStorage.setItem(
      'properties',
      JSON.stringify(savedProperties)
    )
  }, [savedProperties])


  const [currentSlide, setCurrentSlide] = useState(0)


  // Desktop = 3 كروت
  const desktopSlides = []

  for (let i = 0; i < savedProperties.length; i += 3) {
    desktopSlides.push(
      savedProperties.slice(i, i + 3)
    )
  }


  // Mobile = كرت واحد
  const mobileSlides = savedProperties


  // Next
  const nextSlide = () => {
    setCurrentSlide((prev) => {

      if (window.innerWidth <= 992) {

        if (prev >= mobileSlides.length - 1) {
          return 0
        }

        return prev + 1
      }


      if (prev >= desktopSlides.length - 1) {
        return 0
      }

      return prev + 1
    })
  }


  // Previous
  const prevSlide = () => {
    setCurrentSlide((prev) => {

      if (window.innerWidth <= 992) {

        if (prev <= 0) {
          return mobileSlides.length - 1
        }

        return prev - 1
      }


      if (prev <= 0) {
        return desktopSlides.length - 1
      }

      return prev - 1
    })
  }


  return (
    <div className="property-slider">


      {/* Desktop */}

      <div className="desktop-slider">

        <button
          className="slider-btn"
          onClick={prevSlide}
        >
          prev
        </button>


        <div className="slider-window">

          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >

            {desktopSlides.map((slide, index) => (

              <div
                className="desktop-slide"
                key={index}
              >

                {slide.map((property) => (

                  <div
                    className="slide-card"
                    key={property.id}
                  >

                    <PropertyCard
                      property={property}
                    />

                  </div>

                ))}

              </div>

            ))}

          </div>

        </div>


        <button
          className="slider-btn"
          onClick={nextSlide}
        >
          next
        </button>

      </div>



      {/* Mobile */}

      <div className="mobile-slider">


        <div className="container-btn">

          <button
            className="slider-btn prev"
            onClick={prevSlide}
          >
            prev
          </button>


          <button
            className="slider-btn next"
            onClick={nextSlide}
          >
            next
          </button>

        </div>


        <div className="slider-window">

          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >

            {mobileSlides.map((property) => (

              <div
                className="mobile-slide"
                key={property.id}
              >

                <PropertyCard
                  property={property}
                />

              </div>

            ))}

          </div>

        </div>


      </div>

    </div>
  )
}

export default PropertySlider