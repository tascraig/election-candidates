// Card.jsx

import React from 'react'
import './card.css'
import profilePic from '../assets/person.jpg'

const Card = ({ name }) => {
  return (
    <div className='card-container'>
      <div className='card'>
        <img src={profilePic} alt="Candidate Profile Picture" className='profilepic' />
        <p className='name'>{name}</p> {/* Use the name prop here */}
      </div>  
    </div>
  )
}

export default Card;
