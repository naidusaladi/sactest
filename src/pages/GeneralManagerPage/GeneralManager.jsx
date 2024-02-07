import React from 'react'
import './GeneralManager.css'
import Card from '../../components/card/Card'


const GeneralManager = () => {
  const data="ThankYou"
  const id=1
  return (
    <div className='gmContainer'>
      <h1>General Manager</h1>
      <div className='gmcardsContainer'>
        <Card data={data} id={id}/>
        <Card data={data} id={id}/>
        <Card data={data} id={id}/>
        <Card data={data} id={id}/>
      </div>
      
    </div>
  )
}

export default GeneralManager
