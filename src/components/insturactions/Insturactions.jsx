import React from 'react'
import './Insturactions.css'
import {Link} from "react-router-dom";
const Insturactions = () => {
  return (
    <div className='insturactionsContainer'>
      In1
      In2
      <button className='votebtn'>
        <Link to='President'>Start Voting</Link>
        </button>
      
    </div>
  )
}

export default Insturactions
