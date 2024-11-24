import React from 'react'
import '../../style/Feature/Screen1.css'
import Tables from './Tables'

const Screen1 = () => {
  return (
    <div className='Feature-screen1'>
        <div className="Feature-screen1-head">
            <div>
                <h3>RapidPay Features</h3>
                <div className='line'></div>
            </div>
            <div>
                <h5 style={{color:"blue"}}>RapidPay - Tap to Pay</h5>
                <p>software-based solution that allows merchants
                     to accept payments directly on their mobile devices or tablets</p>
            </div>
            <div>
                <h5>Traditional POS</h5>
                <p>hardware-based systems used by businesses to process payments and manage sales transactions.</p>
            </div>
        </div>
        <Tables/>
        <Tables/>
        <Tables/>
        <Tables/>
        
        

    </div>
  )
}

export default Screen1