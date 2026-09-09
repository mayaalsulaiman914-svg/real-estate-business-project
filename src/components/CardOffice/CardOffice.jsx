import React from 'react'
import './CardOffice.css'
import Button from '../Button/Button'
const CardOffice = ({office}) => {
  return (
    <div className='office'>
      <p className='title'>{office.title}</p>
      <h2 className=' address'>{office.address}</h2>
      <p className='desc'>{office.description}</p>
       <div className="contact">
       <div className="rounded"><img src='/assets/img/White Email Icon (1).png' /><p className='email'>{office.email}</p></div>
       <div className="rounded"><img src='/assets/img/phone Icon.png' /> <p className='phone'>{office.phone}</p></div>
      <div className="rounded"> <img src='/assets/img/White location.png' /> <p className='location'>{office.location}</p></div>
       </div>
       <Button className='primary'>Get Direction</Button>
    </div>
  )
}

export default CardOffice
