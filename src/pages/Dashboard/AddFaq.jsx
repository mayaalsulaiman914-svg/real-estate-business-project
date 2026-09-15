import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import faqs from '../../data/FaqSlider'

const AddFaq = () => {
  const navigate = useNavigate()

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const storedFaqs = JSON.parse(localStorage.getItem('faqs')) || faqs

    const newFaq = {
      id: storedFaqs.length + 1,
      question,
      answer
    }

    localStorage.setItem('faqs', JSON.stringify([...storedFaqs, newFaq]))

    alert('FAQ added successfully!')
    navigate('/dashboard/faqs')
  }

  return (
    <div className="add-property">
      <h1>Add FAQ</h1>

      <form className="add-form" onSubmit={handleSubmit}>
        <div className="col">
          <label>Question</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>

        <div className="col">
          <label>Answer</label>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </div>

        <div className="add">
          <button type="submit" className="add-btn">
            Add FAQ
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddFaq