import React from 'react'
import '../../style/Home/homeScr2.css'
import { useNavigate } from 'react-router-dom'

const HomeScreen2 = () => {
  const navigate=useNavigate()
  return (
    <div className='HomeScreen2' id='certificates'>
        <h3>Trusted by the World's best companies</h3>
        <div className='company'>
            
                <img src="https://nearpay.io/_ipx/w_640,q_75/%2F_next%2Fstatic%2Fmedia%2Fmada.ecb4c84d.png?url=%2F_next%2Fstatic%2Fmedia%2Fmada.ecb4c84d.png&w=640&q=75" alt="" />
                
                <img src="https://nearpay.io/_next/static/media/visa.6b96beb2.svg" alt="" />
                <img src="https://nearpay.io/_next/static/media/master.9f887cc9.svg" alt="" />
                <img src="https://nearpay.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famerican.41de6ed1.png&w=128&q=75" alt="" />
                <img src="https://nearpay.io/_next/static/media/pci.b17eeff7.svg" alt="" />
                

        </div>
        <div class="box">
        <h1>Explore Rapid
SoftPos<br/>
        Tap to Pay Features</h1>
        <p>Learn about Rapid
SoftPos's innovative Tap to Pay features,
           designed  to <br/> streamline transactions
           with contactless technology for faster and more<br/> secure payments.</p>

        <button className='Btn' onClick={()=>navigate('/feature')}>Learn More</button>
    </div>


    </div>
  )
}

export default HomeScreen2