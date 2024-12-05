import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Feature from '../pages/Feature'
import Blog from '../pages/Blog'
import News from '../pages/News'
import SingleNews from '../pages/SingleNews'
import Contact from '../pages/Contact'
import Compilance from '../pages/Compilance'
import Partners from '../pages/Partners'

function App() {
  

  return (
    <>
        <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/feature" element={<Feature/>} />
      <Route exact path="/blog" element={<Blog/>} />
      <Route exact path="/news" element={<News/>} />
      <Route exact path="/news/:id" element={<SingleNews/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/compile" element={<Compilance/>} />
      <Route exact path="/partners" element={<Partners/>} />

        
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
