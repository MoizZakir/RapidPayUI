import React from 'react'
import '../style/Navbar.css'

const Navbar = () => {
    console.log(window.innerWidth)
    
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="https://rapidgateway.pk/assets/images/lLogo.png" alt="" />
            <span className='text1'>RapidPay.</span>
            <span className='text2'>io</span>

        </div>
        <div className='navbar-items'>

            <div className='navbar-item'> Product &#11167;
                <div className='dropdown'>
                    <div className='dropdown-item'> Home 1</div>
                    <div className='dropdown-item'> Home 2</div>
                    <div className='dropdown-item'> Home 3</div>
                    <div className='dropdown-item'> Home 3</div>
                    <div className='dropdown-item'> Home 3</div>
                </div>
            </div>
            <div className='navbar-item'> Company &#11167;</div>
            <div className='navbar-item'> Developers &#11167;</div>
            
            <div className='navbar-item'> Resources &#11167;</div>
        </div>

        <div className="nav-right">
            <button>Sign in</button>

        </div>
    </div>
  )
}

export default Navbar