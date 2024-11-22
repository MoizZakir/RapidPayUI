import React from 'react'
import Navbar from '../components/Navbar'
import HomeScreen1 from '../components/Home/HomeScreen1'
import HomeScreen2 from '../components/Home/HomeScreen2'
import HomeScreen3 from '../components/Home/HomeScreen3'
import HomeScreen4 from '../components/Home/HomeScreen4'
import HomeScreen5 from '../components/Home/HomeScreen5'
import Footer from '../components/Footer'
import HomeScreen6 from '../components/Home/HomeScreen6'

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