import React from 'react'
import '../../style/About/screen1.css'

const Screen1 = () => {
  return (
    <div className='screen1'>
        <div className="screen1-scction1">
            <h2>We're in business to help you thrive
            </h2>
            <div></div>
            <p>RapidPay is a Saudi Fintech company that provides Payment Infrastructure as a Service.
                 Bring your payments in-house securely and reliably today using our payments infrastructure.</p>
        </div>

        <div className="screen1-scction2">
            <div className='image'>
                <img src="https://nearpay.io/_next/static/media/about.b85e4637.png" alt="" />
                

            </div>
            <div className='text'>
            <p>A sprinkler disaster at a co-working space brought
                     Mohammad and Hamzah together in 2020. After fishing out
                      the revivable computers and laptops both found common ground in 
                      building the future of POS payments for merchants. As their team grew,
                       so did their ambition to build payments infrastructure as a service for
                        the MENA region and beyond. Today, RapidPay boasts around 30 employees 
                        from over 7 nationalities around the globe all eager to continue building
                         payments infrastructure as a service for the region and beyond.</p>

                         </div>

        </div>

        <div className="screen1-section3">
            <h2 className='' >RapidPay Thrilled to Gain Support from Visionary Teams at
            </h2>
            <div></div>

            <div className='screen1-section3-section1'>
                <img src="https://nearpay.io/_ipx/w_256,q_75/%2F_next%2Fstatic%2Fmedia%2Fvision.4c3a32d3.png?url=%2F_next%2Fstatic%2Fmedia%2Fvision.4c3a32d3.png&w=256&q=75" alt="" />

                <img src="https://nearpay.io/_next/static/media/hala.0c131ae4.svg" alt="" />
                <img src="https://nearpay.io/_next/static/media/arzan.3ce2e7d5.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Screen1