import React from 'react'
import './President.css'
import Card from '../../components/card/Card'



const President = () => {

 const data="vicepresident"
 const id=1
  return (
    <div className='presidentContainer'>
      <h1>President</h1>
      <div className='cardsContainer'>
        <Card data={data} id={id}/>
        <Card data={data} id={id}/>
        <Card data={data} id={id}/>
        <Card data={data} id={id}/>
      </div>
      
    </div>
  )
}

export default President
