import React from 'react'
import './VicePresident.css'
import Card from  '../../components/card/Card'

const VicePresident = () => {
  const data="GvicePresident"
  const id=1
  return (
    <div className='vicepresidentContainer'>
      <h1>Vice-President</h1>
      <div className='vicecardsContainer'>
        <Card data={data} id={id}/>
        <Card data={data} id={id}/>
        <Card data={data} id={id}/>
        <Card data={data} id={id}/>
      </div>
      
    </div>
  )
}

export default VicePresident
