import React from 'react'
import Events from "../../components/events/Events"
import Insturactions from '../../components/insturactions/Insturactions'
import './IntroPage.css'
import {slides} from '../../data/corouselData.json'

const IntroPage = () => {
  return (
    <div className='intro'>
        <div className='headder'>
            <h1>SAC</h1>
            <h2>Elections 2024</h2>
        </div>

        <div className='headdercontainer'>
            <div>
                <h2 style={{textAlign:"center"}}>Events 2023</h2>
                <Events data={slides}/>
            </div>
            <div>
                <h2 style={{textAlign:"center"}}>Insturactions</h2>
                <Insturactions/>
            </div>
        </div>
        


    </div>
  )
}

export default IntroPage
