import React from 'react'
import { useNavigate } from "react-router-dom";
import './Card.css'
import Img from '../../assets/imgs/hi.jpeg'
const Card = ({id,data}) => {
  let navigate = useNavigate();
  const handelMove=()=>{
    navigate(`/${id}/${data}`,{replace:true});
  }
  return (
    <div className='cardContainer'>
        <div className='cardImg'>
            <img src={Img} alt='name'className='img'/>
        </div>
        <div className='cardData'>
            <h2 className='name'>Name</h2>
            <h3 className='year'>year</h3>
        </div>
        <button className='btn' onClick={handelMove}>Vote</button>

        
      
    </div>
  )
}

export default Card
