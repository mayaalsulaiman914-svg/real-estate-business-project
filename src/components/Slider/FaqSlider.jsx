import React from 'react'
import './FaqSlider.css'
import './Card.css'

const FaqSlider = ({ faq }) => {
  return (
    <div className="card faq-card">
      <h2>{faq.question}</h2>
      <p className="desc">
        {faq.answer}
      </p>
      <button className="faq-read-more">
        Read More
      </button>
    </div>
  )
}
export default FaqSlider