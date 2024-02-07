import React from 'react'
import IntroPage from './pages/IntroPage/IntroPage'
import President from './pages/PresidentPage/President'
import VicePresident from './pages/VicePresidentPage/VicePresident'
import GvicePresident from './pages/GvicePresidentPage/GvicePresident'
import GeneralManager from './pages/GeneralManagerPage/GeneralManager'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ThankYou from './pages/ThankYouPage/ThankYou'

const App = () => {
  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageNotFound/>}/>
        <Route path=":userId" element={<IntroPage />} />
        <Route path=":userId/President" element={<President />} />
        <Route path=":userId/VicePresident" element={<VicePresident />} />
        <Route path=":userId/GvicePresident" element={<GvicePresident />} />
        <Route path=":userId/GeneralManager" element={<GeneralManager />} />
        <Route path=":userId/ThankYou" element={<ThankYou />} />

        <Route path="*" element={<PageNotFound/>}/>
    
      </Routes>
    </BrowserRouter>



      {/* <IntroPage/>
      <President/>
      <VicePresident/>
      <GvicePresident/>
      <GeneralManager/> */}
  

    </>
  )
}

export default App
