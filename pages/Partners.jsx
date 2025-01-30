import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Screen1 from '../components/Partners/Screen1'
import Footer from '../components/Footer'

const Partners = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
        <Navbar/>
        <Screen1/>
        <Footer/>
    </div>
  )
}

export default Partners