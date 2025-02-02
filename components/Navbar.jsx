import React from 'react'
import '../style/Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    console.log(window.innerWidth)
    const navigate = useNavigate()

    return (
        <div className='navbar'>
            <div className="logo">
                <img src="https://rapidgateway.pk/assets/images/lLogo.png" alt="" />
                <span className='text1'>Rapid</span>
                <span className='text2'>SoftPos</span>

            </div>
            <div className='navbar-items'>

                <div className='navbar-item'> Product &#11167;
                    <div className='dropdown'>
                        <div className='dropdown-item'><a href="/#certificates">Certificate</a>
                        </div>
                        <div className='dropdown-item'>
                            <a href="/#infrastucture"> Infrastructure</a>
                        </div>
                        <div className='dropdown-item'>
                            <a href="/#technically">Technically</a>
                        </div>
                        <div className='dropdown-item'>
                            <a href="/#features">Features</a>
                        </div>

                        <div className='dropdown-item'>

                            <a href="/#pricing">Pricing</a>
                        </div>
                    </div>
                </div>
                <div className='navbar-item'> Company &#11167;
                    <div className='dropdown'>
                        <div className='dropdown-item' onClick={() => { navigate('/about') }}  > About</div>
                        <div className='dropdown-item' onClick={() => { navigate('/feature') }} > Features</div>
                        <div className='dropdown-item' onClick={() => { navigate('/blog') }}> Blog</div>
                        <div className='dropdown-item' onClick={() => { navigate('/news') }}> News</div>
                        <div className='dropdown-item' onClick={() => { navigate('/contact') }}> Contact</div>
                        <div className='dropdown-item' onClick={() => { navigate('/compile') }}> Compilance</div>
                        <div className='dropdown-item' onClick={() => { navigate('/partners') }}> Partners</div>
                        <div className='dropdown-item' onClick={() => { navigate('/career') }}> Career</div>
                        <div className='dropdown-item' onClick={() => { navigate('/privacy') }}> Privacy Policy</div>
                    </div>
                </div>
                <div className='navbar-item'> Developers &#11167;
                    <div className='dropdown'>
                        <div className='dropdown-item' onClick={() => { navigate('/intro') }}> Get Stated</div>
                        <div className='dropdown-item' onClick={() => { navigate('/Sdk') }}> SDK</div>
                        <div className='dropdown-item' onClick={() => { navigate('/Android-sdk') }}> Android-SDK</div>

                    </div>
                </div>

                <div className='navbar-item'> Resources &#11167;
                <div className='dropdown'>
                        
                        <div className='dropdown-item' onClick={() => { navigate('/support') }}> Support</div>
                        <div className='dropdown-item' onClick={() => { navigate('/intro') }}> Documentation</div>

                    </div>
            </div>
            </div>


            <div className="nav-right">
                <button onClick={()=>navigate('/signin')}>Sign in</button>

            </div>
        </div>
    )
}

export default Navbar