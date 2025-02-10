import React from 'react'
import '../style/footer.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
    <div style={{paddingBottom:"50px", width:'95%'}}>
    <div className='Footer'>
       <div className='footer-1'>
        <h3>Rapid
SoftPos</h3>
        <p>Start taking in person NFC card payments in under 30 minutes using
            <br/> the Rapid
SoftPos SDK</p>
        <div style={{display:'flex',gap:"10px"}}>
            
           <a href="https://www.linkedin.com/company/rapid-pay-pk/" target='_blank' > <FaLinkedin size={25}/></a>
           <a href="https://github.com/rapid-pay" target='_blank'> <FaGithub size={25} color='black'/></a>
            <a href="https://www.instagram.com/rapidpaypk/" target='_blank'><FaInstagram color='purple' size={25}/></a>
            
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
                   
                    
                    <li>Features</li>
                    {/* <li>Blog</li> */}
                    {/* <li>News</li> */}
                    {/* <li>Contact</li> */}
                    {/* <li>Compliance</li> */}
                    <li>Partners</li>
                    {/* <li>Career</li> */}
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
                    {/* <li>Updates</li> */}
                    <li>documentation</li>
                    
                </ul>
            </div>    
    </div>
<p style={{textAlign:'center', fontSize:"15px" ,color:'gray'}}>2024 All Rights Reserved © Rapid
SoftPos</p>
    
    </div>
    </div>
  )
}

export default Footer