import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Feature from '../pages/Feature'

function App() {
  

  return (
    <>
        <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/feature" element={<Feature/>} />

        
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
