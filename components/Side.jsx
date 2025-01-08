import React from 'react'
import '../style/side.css'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'


const Side = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
 
    const location=useLocation().pathname.replace('/','')

    const navigate=useNavigate()
  return (
    <div className='side'
    >
        <div>
        <h5>Guides</h5>
        <ul>
            <li style={{color:location=='intro' &&'blue'}} onClick={()=>navigate('/intro')}>Introduction</li>
            <li onClick={()=>navigate('/prepare')}>Preparing Your App</li>
            <li style={{color:location=='quick' &&'blue'}}onClick={()=>navigate('/quick')}>Quick Start</li>
            <li style={{color:location=='sdk' &&'blue'}} onClick={()=>navigate('/sdk')}>SDK </li>
            <li>SDK Models</li>
            <li style={{color:location=='error' &&'blue'}}  onClick={()=>navigate('/error')}>Error Codes</li>
            
            <li style={{color:location=='faq' &&'blue'}} onClick={()=>navigate('/faq')} >FAQ</li>
        </ul>
        </div>
        <div>
        <h5>Remote Integration</h5>
        <ul>
            <li style={{color:location=='web-sdk' &&'blue'}} onClick={()=>navigate('/web-sdk')}>Web SDK</li>
            <li className='ios'>IOS SDK</li>
            <li style={{color:location=='Android-sdk' &&'blue'}} onClick={()=>navigate('/Android-sdk')}> Android SDK Proxy</li>
            
        </ul>
        </div>
        <div>
        <h5>API Endpoints</h5>
        <ul>
            <li style={{color:location=='account' &&'blue'}} onClick={()=>navigate('/account')}>Accounts API</li>
            <li style={{color:location=='merchant' &&'blue'}} onClick={()=>navigate('/merchant')}>Merchant API</li>
            <li>Webhook</li>
           
        </ul>
        
        </div>
        <div>
        <h5>Changelogs</h5>
        <ul>
            <li style={{color:location=='sdk' &&'blue'}} onClick={()=>navigate('/sdk')}> SDK</li>
            <li style={{color:location=='payment-plugin' &&'blue'}} onClick={()=>navigate('/payment-plugin')}>Payement Plugins</li>
            <li style={{color:location=='white-label' &&'blue'}} onClick={()=>navigate('/white-label')} >White label(full app)</li>
           
        </ul>
        
        </div>


    </div>
  )
}

export default Side