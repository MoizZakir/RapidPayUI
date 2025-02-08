import React from 'react'
import '../../style/Feature/Screen1.css'
import Tables from './Tables'

const Screen1 = () => {
    const data=["Transaction Types" ,"Payment Network Compatibility",  "Supported Devices", "Dashboard Features", "Internet Connectivity Options", "Terminal Assignment and Control","SDK Integration Options","Supported Programming Languages","Supported Frameworks"]
  return (
    <div className='Feature-screen1'>
        <div className="Feature-screen1-head">
            <div>
                <h3>Rapid
SoftPos Features</h3>
                <div className='line'></div>
            </div>
            <div>
                <h5 style={{color:"blue"}}>Rapid
SoftPos - Tap to Pay</h5>
                <p>software-based solution that allows merchants
                     to accept payments directly on their mobile devices or tablets</p>
            </div>
            <div>
                <h5>Traditional POS</h5>
                <p>hardware-based systems used by businesses to process payments and manage sales transactions.</p>
            </div>
        </div>
        {data.map((item,index)=><Tables key={index} value={item}/>)}
       
        
        

    </div>
  )
}

export default Screen1