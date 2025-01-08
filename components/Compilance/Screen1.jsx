import React from 'react'
import '../../style/Compilance/Screen1.css'
import Levels from './Levels'


const Screen1 = () => {
  return (
    <div className='compilance-screen1'>
        <h2>Always compliant and certified</h2>
        <div className='lines'></div>
        <p className='p1'>Take payments without worrying about compliance -
             rapidpay ensures that we are always certified and compliant to the latest standards.</p>
          <Levels/>   
          <Levels/>   
          <Levels/>   
    </div>
  )
}

export default Screen1