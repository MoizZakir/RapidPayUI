import React from 'react'
import Navbar from '../components/Navbar'
import HomeScreen1 from '../components/HomeScreen1'
import HomeScreen2 from '../components/HomeScreen2'
import HomeScreen3 from '../components/HomeScreen3'
import HomeScreen4 from '../components/HomeScreen4'
import HomeScreen5 from '../components/HomeScreen5'
import Footer from '../components/Footer'
import HomeScreen6 from '../components/HomeScreen6'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeScreen1/>
        <HomeScreen2/>
        <HomeScreen3/>
        <HomeScreen4/>
        <HomeScreen5/>
        <HomeScreen6/>
        <Footer/>
    </div>
  )
}

export default Home