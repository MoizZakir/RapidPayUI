import React from 'react'
import '../style/homescr4.css'
import { RiAndroidFill } from 'react-icons/ri'
import { FaApple, FaChrome } from 'react-icons/fa'
import { IoLogoWindows } from 'react-icons/io'

const HomeScreen4 = () => {
  return (
    <div className='homescreen4'>
     <div className="homescreen4-section1">
        <div>
        <h1>We support all platforms & languages</h1>
    <p>Whether Java or Kotlin, our updated SDK supports your app. We prioritize security and functionality to match evolving standards.</p>     
    <p style={{color:'black'}}>Platform</p>   
        </div>

<div style={{ paddingRight:'60px', display:'flex' ,justifyContent:'space-between'}}>
<RiAndroidFill color='gray'size={60} />
<FaApple color='gray'size={60} />
<FaChrome  color='gray'size={60} />
<IoLogoWindows color='gray'size={60} />

</div>
   
        </div>   
     <div className="homescreen4-section2"></div>   
        
        
        </div>
  )
}

export default HomeScreen4