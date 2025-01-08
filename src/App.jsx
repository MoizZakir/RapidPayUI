import { useState } from 'react'
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
import Privacy from '../pages/Privacy'
import Career from '../pages/Career'
import Intro from '../pages/Intro'
import Prepare from '../pages/Prepare'
import Quick from '../pages/Quick'
import WebSdk from '../pages/WebSdk'
import Android from '../pages/Android'
import FAQ from '../pages/FAQ'
import Errors from '../pages/Errors'
import SDK from '../pages/SDK'
import PayementPlugin from '../pages/PayementPlugin'
import WhiteLabel from '../pages/White-label'
import Merchant from '../pages/Merchant'
import Account from '../pages/Account'

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
      <Route exact path="/privacy" element={<Privacy/>} />
      <Route exact path="/career" element={<Career/>} />
      <Route exact path="/intro" element={<Intro/>} />
      <Route exact path="/prepare" element={<Prepare/>} />
      <Route exact path="/quick" element={<Quick/>} />
      <Route exact path="/web-sdk" element={<WebSdk/>} />
      <Route exact path="/Android-sdk" element={<Android/>} />
      <Route exact path="/faq" element={<FAQ/>} />
      <Route exact path="/error" element={<Errors/>} />
      <Route exact path="/payment-plugin" element={<PayementPlugin/>} />
      <Route exact path="/white-label" element={<WhiteLabel/>} />
      <Route exact path="/sdk" element={<SDK/>} />
      <Route exact path="/merchant" element={<Merchant/>} />
      <Route exact path="/account" element={<Account/>} />

        
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
