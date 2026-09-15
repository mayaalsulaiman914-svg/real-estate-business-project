import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import faqs from '../../data/FaqSlider'

const EditFaq = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  useEffect(() => {
    const storedFaqs = JSON.parse(localStorage.getItem('faqs')) || faqs
    const faq = storedFaqs.find((item) => String(item.id) === id)
    if (faq) {
      setQuestion(faq.question)
      setAnswer(faq.answer)
    }
  }, [id])
  const handleSubmit = (e) => {
    e.preventDefault()
    const storedFaqs = JSON.parse(localStorage.getItem('faqs')) || faqs
    const updatedFaqs = storedFaqs.map((faq) =>
      String(faq.id) === id
        ? { ...faq, question, answer }
        : faq
    )
    localStorage.setItem('faqs', JSON.stringify(updatedFaqs))
    alert('FAQ updated successfully!')
    navigate('/dashboard/faqs')
  }
  return (
    <div className="edit-property">
      <h1>Edit FAQ</h1>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="col">
          <label>Question</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)} required />
        </div>
        <div className="col">
            <label>Answer</label>
            <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </div>

        <div className="save">
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditFaq