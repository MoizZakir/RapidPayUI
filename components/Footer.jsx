import React from 'react'
import '../style/footer.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div style={{paddingBottom:"50px"}}>
    <div className='Footer'>
       <div className='footer-1'>
        <h3>RapidPay</h3>
        <p>Start taking in person NFC card payments in under 30 minutes using
            <br/> the rapidpay SDK</p>
        <div style={{display:'flex',gap:"10px"}}>
            
            <FaLinkedin size={25}/>
            <FaGithub size={25}/>
            <FaInstagram size={25}/>
            
            </div>

            
        </div>
        <div className='footer-2'>
                <h5>Product</h5>
                <ul>
                    <li>Certficate</li>
                    <li>Infrastructure</li>
                    <li>Technically</li>
                    <li>Features</li>
                    <li>On-Boarding</li>
                    <li>Pricing</li>
                </ul>
            </div>  
            <div className='footer-2'>
                <h5>Company</h5>
                <ul>
                <li>About</li>
                    <li>features</li>
                    <li>Technically</li>
                    <li>Features</li>
                    <li>Blog</li>
                    <li>News</li>
                    <li>Contact</li>
                    <li>Compliance</li>
                    <li>Partners</li>
                    <li>Career
                    </li>
                    <li>Privacy policy</li>
                </ul>
            </div>   
            <div className='footer-2'>
                <h5>Developer</h5>
                <ul>
                    <li>Get Started</li>
                    <li>API
                    </li>
                    <li>Web SDK</li>
                    <li>iOS SDK</li>
                    <li>Android SDK</li>
                </ul>
            </div>   
            <div className='footer-2'>
                <h5>Resources</h5>
                <ul>
                    <li>Status</li>
                    <li>Support</li>
                    <li>Updates</li>
                    <li>documentation</li>
                    
                </ul>
            </div>    
    </div>
<p style={{textAlign:'center', fontSize:"15px" ,color:'gray'}}>2024 All Rights Reserved © RapidPay</p>
    
    </div>
  )
}

export default Footer