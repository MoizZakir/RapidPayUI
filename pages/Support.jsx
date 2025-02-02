import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Screen1 from '../components/Support/Screen1'
import Footer from '../components/Footer';

const Support = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
 


  return (
    <div style={{}} >
        <Navbar/>
        
            
            <Screen1/>
            <Footer/>

        
    </div>
  )
}

export default Support