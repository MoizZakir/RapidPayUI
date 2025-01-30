import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Screen1 from '../components/Contact/Screen1'

const Contact = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
        <Navbar/>
        <Screen1/>
    </div>
  )
}

export default Contact