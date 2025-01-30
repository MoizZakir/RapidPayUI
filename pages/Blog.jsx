import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Screen1 from '../components/Blog/Screen1'

const Blog = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
        <Navbar />
        <Screen1/>
        <Footer/>    </div>
  )
}

export default Blog