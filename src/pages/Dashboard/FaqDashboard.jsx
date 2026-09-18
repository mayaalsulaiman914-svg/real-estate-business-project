import React, { useEffect, useState } from 'react'
import faqs from '../../data/FaqSlider'
import { useNavigate } from 'react-router-dom'

const FaqDashboard = () => {
  const navigate = useNavigate()
  const [faqsList, setFaqsList] = useState([])
  const handleDelete = (id) => {
  const storedFaqs = JSON.parse(localStorage.getItem('faqs')) || faqs
  const updatedFaqs = storedFaqs.filter((faq) => faq.id !== id)
  localStorage.setItem('faqs', JSON.stringify(updatedFaqs))
  setFaqsList(updatedFaqs)
}
  useEffect(() => {
    const storedFaqs = JSON.parse(localStorage.getItem('faqs')) || faqs
    setFaqsList(storedFaqs)
  }, [])

  return (
    <div className="faq-dashboard">
      <h2>FAQ</h2>
      <button className="add-btn" onClick={() => navigate('/dashboard/faqs/add')}> Add FAQ</button>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {faqsList.map((faq) => (
            <tr key={faq.id}>
              <td>{faq.id}</td>
              <td>{faq.question}</td>
              <td>{faq.answer}</td>
              <td>
                <button className='edit'  onClick={() => navigate(`/dashboard/faqs/${faq.id}`)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(faq.id)}> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FaqDashboard