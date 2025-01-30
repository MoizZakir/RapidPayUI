import React, { useEffect } from 'react'
import NavBar from '../components/Navbar'
import Screen1 from '../components/Signin/Screen1'
const Signin = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
       
        <Screen1/>
    </div>
  )
}

export default Signin