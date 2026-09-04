import React from 'react'
import './ClientCard.css'

const ClientCard = ({client}) => {
  return (
    <div className='card client-card'>
      <div className="container-stars"><div className='star'><img src='/assets/img/star.png' /></div><div className='star'><img src='/assets/img/star.png' /></div><div className='star'><img src='/assets/img/star.png' /></div><div className='star'><img src='/assets/img/star.png' /></div><div className='star'><img src='/assets/img/star.png' /></div></div>
      <h2>{client.title}</h2>
      <p className='desc'>{client.description}</p>
      <div className="container-person">
         <div className="image"><img src={client.image} /></div>
        <div className="info-person">
            <h3>{client.clientName}</h3>
            <p>{client.country}</p>
        </div>
      </div>
    </div>
  )
}

export default ClientCard
