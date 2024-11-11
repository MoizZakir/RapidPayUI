import React from 'react'
import '../style/Navbar.css'

const Navbar = () => {
    
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="https://rapidgateway.pk/assets/images/lLogo.png" alt="" />
            <span className='text1'>RapidPay</span>
            <span className='text2'>Gateway</span>

        </div>
        <div className='navbar-items'>

            <div className='navbar-item'> Home
                <div className='dropdown'>
                    <div className='dropdown-item'> Home 1</div>
                    <div className='dropdown-item'> Home 2</div>
                    <div className='dropdown-item'> Home 3</div>
                </div>
            </div>
            <div className='navbar-item'> Payment Solution</div>
            <div className='navbar-item'> Security</div>
            <div className='navbar-item'> About</div>
            <div className='navbar-item'> Contact</div>
        </div>

        <div className="nav-right">

        </div>
    </div>
  )
}

export default Navbar