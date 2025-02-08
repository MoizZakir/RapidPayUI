import React from 'react'
import '../../style/Home/homeScr7.css'

const HomeScreen7 = () => {
  return (
    <div className='homescreen7'>
        <div className='homescreen7-section1'> 
        <h2>Onboard in 4 simple steps</h2>
        <p>Send an SMS or email to your merchants so they can start sales with the full app.
             With our SDK, the onboarding is seamlessly controlled by you through our APIs.</p></div>


        <div className='homescreen7-section2'>
            <div>
                <p>1 - Download Payment Plugin</p>
                <img src="https://nearpay.io/_next/static/media/1.73d0255a.svg" alt="" />
                

            </div>
            <div>
                <p>2 - Start purchase </p>
                <img src="https://nearpay.io/_next/static/media/2.040b6d92.svg" alt="" />
                

            </div>
            <div>
                <p>3 - Successfull Purchase</p>
                <img src="https://nearpay.io/_next/static/media/3.7345ccef.svg" alt="" />
                

            </div>

            <div>
                <p>4 - See Transaction & Receipts</p>
                <img src="https://nearpay.io/_next/static/media/4.e51dc7e0.svg" alt="" />
                

            </div>





        </div>
    </div>
  )
}

export default HomeScreen7