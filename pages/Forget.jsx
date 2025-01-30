import React, { useEffect } from 'react'
import NavBar from '../components/Navbar'
import Screen1 from '../components/Forget/Screen1'
const Forget = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
       
        <Screen1/>
    </div>
  )
}

export default Forget