import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cartpage from './pages/Cartpage'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='top-10 pt-32'>
      <Routes >
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Cartpage" element={<Cartpage/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App