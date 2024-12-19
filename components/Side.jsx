import React from 'react'
import '../style/side.css'
import { useNavigate } from 'react-router-dom'


const Side = () => {
    const navigate=useNavigate()
  return (
    <div className='side'
    >
        <div>
        <h5>Guides</h5>
        <ul>
            <li onClick={()=>navigate('/intro')}>Introduction</li>
            <li onClick={()=>navigate('/prepare')}>Preparing Your App</li>
            <li onClick={()=>navigate('/quick')}>Quick Start</li>
            <li>SDK </li>
            <li>SDK Models</li>
            <li>Error Codes</li>
            <li>FAQ</li>
        </ul>
        </div>
        <div>
        <h5>Remote Integration</h5>
        <ul>
            <li>Web SDK</li>
            <li>IOS SDK</li>
            <li> Android SDK Proxy</li>
            
        </ul>
        </div>
        <div>
        <h5>API Endpoints</h5>
        <ul>
            <li>Accounts API</li>
            <li>Merchant API</li>
            <li>Webhook</li>
           
        </ul>
        
        </div>
        <div>
        <h5>Changelogs</h5>
        <ul>
            <li> SDK</li>
            <li>Payement Plugins</li>
            <li>White label(full app)</li>
           
        </ul>
        
        </div>


    </div>
  )
}

export default Side