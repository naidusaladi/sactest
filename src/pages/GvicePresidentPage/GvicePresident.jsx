import React from 'react'
import Card from  '../../components/card/Card'
import './GvicePresident.css'

const GvicePresident = () => {
  const data="GeneralManager"
  const id=1
  return (
    <div className='GvicepresidentContainer'>
      <h1>Girl Vice-President</h1>
      <div className='GvicecardsContainer'>
        <Card data={data} id={id}/>
        <Card data={data} id={id}/>
        <Card data={data} id={id}/>
        <Card data={data} id={id}/>
      </div>
      
    </div>
  )
}

export default GvicePresident
