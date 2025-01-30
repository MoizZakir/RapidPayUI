import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Side from '../components/Side'
import Screen1 from '../components/Intro/Screen1'

const Intro = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div style={{}} >
        <Navbar/>
        <div className='Intro' style={{display:'flex',alignItems:'start',justifyContent:'center'}}>
            <Side/>
            <Screen1/>

        </div>
    </div>
  )
}

export default Intro