import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import Home from './Components/Home'
import Red  from './Components/Red'
import Blue from './Components/Blue'


function App() {

  return (
    <>
     <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to='/Blue'><h1>Blue</h1></Link>
        <Link to='/Red'><h1>Red</h1></Link> 
        <Link to='/'><h1>Home</h1></Link>
      </div>

      <div id="main-section">
      <Routes>
       <Route path='/blue' element={<Blue/>} />
       <Route path='/red' element={<Red/>} />
       <Route path='/' element={<Home/>}/>
       <Route path='*' element={<div>404</div>} />
      </Routes>
      </div>

    </div>
    </>
  )
}

export default App
