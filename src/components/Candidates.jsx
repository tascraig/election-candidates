// Candidates.jsx

import React from 'react'
import Card from './Card'
import './candidates.css'

const Candidates = () => {
    const candidateNames = [
        "William Cotter", "Patrick Denman", "George Devolder-Santos", "Ryan Kalata",
        "John Avlon", "Saint Jermaine Endeley", "Nancy Goroff", "Nicholas J. LaLota",
        "Rob Lubin", "Andrew Garbarino", "Daniel Goldman", "Yvette D. Clarke",
        "Nicole Malliotakis", "Alexandria Ocasio-Cortez", "Jerrold Nadler", 
        "Tom Suozzi", "Grace Meng", "Hakeem Jeffries", "Ritchie Torres", 
        "Jamaal Bowman", "Mondaire Jones", "Lee Zeldin", "Kathleen Rice",
        "Paul Tonko", "Elise Stefanik", "Mike Lawler", "Antonio Delgado",
        "Sean Patrick Maloney", "Chris Jacobs", "Joe Morelle"
    ];

    return (
      <div className='candidates-container'>
          {candidateNames.map((name, i) => (
              <Card key={i} name={name} /> 
          ))}
      </div>
  );
};

export default Candidates;
