import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Screen2 from '../components/News/Screen2'
import Footer from '../components/Footer'

const SingleNews = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
        <Navbar/>
        <Screen2/>
        <Footer/>
    </div>
  )
}

export default SingleNews