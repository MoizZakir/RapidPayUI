import React from 'react'
import '../style/homescr4.css'
import { RiAndroidFill, RiFlutterFill } from 'react-icons/ri'
import { FaApple, FaChrome, FaJava, FaReact } from 'react-icons/fa'
import { IoLogoJavascript, IoLogoWindows } from 'react-icons/io'
import { SiKotlin } from 'react-icons/si'
import { GrSwift } from 'react-icons/gr'

const HomeScreen4 = () => {
  return (
    <div className='homescreen4'>
     <div className="homescreen4-section1">
        <div>
        <h1>We support all platforms & languages</h1>
    <p>Whether Java or Kotlin, our updated SDK supports your app. We prioritize security and functionality to match evolving standards.</p>     
    <p style={{color:'black'}}>Platform</p>   
        </div>

<div style={{ width:'90%', paddingRight:'60px', display:'flex',justifyContent:'space-between'}}>
<RiAndroidFill color='gray'size={60} />
<FaApple color='gray'size={60} />
<FaChrome  color='gray'size={60} />
<IoLogoWindows color='gray'size={60} />


</div>
    <p style={{color:'black'}}>Languages & Frameworks</p>   
<div className='frameworks' style={{ border:'1px solid black', display:'flex',gap:"30px", flexWrap:'wrap', paddingRight:'20px'}}>
<FaJava color='gray'size={60} />
<SiKotlin  color='gray'size={60} />
<GrSwift color='gray'size={60} />
<IoLogoJavascript color='gray'size={60} />
<RiFlutterFill color='gray'size={60} />
<FaReact  color='gray'size={60} />



</div>
   
        </div>   
     <div className="homescreen4-section2"></div>   
        
        
        </div>
  )
}

export default HomeScreen4