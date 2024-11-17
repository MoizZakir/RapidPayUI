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
            <br/> the NearPay SDK</p>
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
                    <li>Certficate</li>
                    <li>Certficate</li>
                    <li>Certficate</li>
                    <li>Certficate</li>
                </ul>
            </div>  
            <div className='footer-2'>
                <h5>Product</h5>
                <ul>
                    <li>Certficate</li>
                    <li>Certficate</li>
                    <li>Certficate</li>
                    <li>Certficate</li>
                    <li>Certficate</li>
                    <li>Certficate</li>
                    <li>Certficate</li>
                </ul>
            </div>   
            <div className='footer-2'>
                <h5>Product</h5>
                <ul>
                    <li>Certficate</li>
                    <li>Certficate</li>
                    <li>Certficate</li>
                    <li>Certficate</li>
                    <li>Certficate</li>
                </ul>
            </div>   
            <div className='footer-2'>
                <h5>Product</h5>
                <ul>
                    <li>Certficate</li>
                    <li>Certficate</li>
                    <li>Certficate</li>
                    <li>Certficate</li>
                    <li>Certficate</li>
                </ul>
            </div>    
    </div>
<p style={{textAlign:'center', fontSize:"15px" ,color:'gray'}}>2024 All Rights Reserved © RapidPay</p>
    
    </div>
  )
}

export default Footer