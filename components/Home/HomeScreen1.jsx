import React from 'react'
import '../../style/Home/homeScr1.css'
import { useNavigate } from 'react-router-dom'

const HomeScreen1 = () => {
  const navigate=useNavigate()
  return (
    <div className='homescreen1' >
        <div className="intro">
            <h1>
            Pakistan's Seamless Payment Solutions for Swift and Secure Transactions
            </h1>
            <p>Easily enable in-person NFC card payments within 30
                 minutes using the cutting-edge Rapid
SoftPos SDK. 
                Elevate your business by swiftly embracing secure transaction methods.</p>
                <div className='intro-btn'>
                <button onClick={()=>navigate('/contact')}>Get Started</button>
                <button onClick={()=>navigate('/intro')} >Documentaion</button>

                </div>

        </div>
        <div className="banner">
            <img src="https://rapidgateway.pk/assets/images/hero__image.png" alt="" />
        </div>


    </div>
  )
}

export default HomeScreen1