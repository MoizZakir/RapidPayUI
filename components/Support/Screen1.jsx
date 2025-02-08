import React from 'react'
import'../../style/Support/screen1.css'
import { MdContactSupport } from 'react-icons/md'
import { AiFillApi } from 'react-icons/ai'
import { FaQuoteLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { CgCommunity, CgLogIn } from 'react-icons/cg'



const Screen1 = () => {
  const navigate=useNavigate()
  return (
    <div
     className='SupportScreen1'
    >

    <div className='SupportScreen1__box'>
      <h4>Expert Guidance from Rapid
SoftPos Team</h4>
      <p>Dive into a treasure trove of friendly advice and helpful 
        answers from the NearPay Team to start accepting payment with
         our Tap to Pay Ecosystem!</p>

    </div>

    <div className='support-services'>
      <div className='support-service__box' onClick={()=>navigate('/contact')}>
      <MdContactSupport size={50} className='icn' />
        <h4>Support Service</h4>
        <p>Get help with your account, integration, and more.</p>
      </div>

      <div className='support-service__box'  onClick={()=>navigate('/quick')}  >
      <AiFillApi size={50} className='icn' />
        <h4>API Reference</h4>
        <p>Find detailed information about our API.</p>
      </div>

      <div className='support-service__box' onClick={()=>navigate('/faq')}>
      <FaQuoteLeft size={50} className='icn' />
        <h4>FAQ</h4>
        <p>Find answers to common questions.</p>
      </div>

      <div className='support-service__box' onClick={()=>navigate('/contact')}>
      <CgCommunity  size={50} className='icn' />

        <h4>Community</h4>
        <p>Join our community and connect with other developers.</p>
      </div>

      <div className='support-service__box' onClick={()=>navigate('/signin')}>
      <CgLogIn size={50} className='icn' />
        <h4>Login </h4>
        <p>To connect with us</p>
      </div>




    </div>

    </div>
  )
}

export default Screen1