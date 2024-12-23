import React from 'react'
import '../../style/Quick/screen1.css'


const Screen1 = () => {
    
  return (
    <div className='quick-screen1'>
        <h3>Android SDK Proxy</h3>
        <p>SDK connect is a service that allows you to connect your app remotely to the SDK using bluetooth , WiFi.</p>
        <div>
            <h5>Before you begin
            </h5>
        <p>The NearPay team is required to create a sandbox account for you using your email and phone number, as well as your Android package name to initiate this integration process.</p>
       
        
        </div>
        <div>
            <h5>Instialize</h5>
        
        <ol>
            <li>1.Add gradle dependency by adding the following code to the your Android App build.gradle</li>
          
        </ol>
        <div className='code' style={{width:'100%'}}>
       
      <p>  dependencies &#10627; <br/>
      implementation 'io.nearpay:nearpay-proxy-v2:0.0.2' <br /> &#10628;
</p>
       </div>
       <ol>
            <li>2.Create single instance of NearPay object with context wherever you need.</li>
          
        </ol>
        <div className='code' style={{width:'100%'}}>
        <div>Java & Kotlin</div>
      <p>  
      val nearPay = NearPay.Builder()<br/><br/>
        .port(8000)<br/><br/>
        .context(requireContext())<br/><br/>
        .environment(environment)<br/><br/>
        .networkConfiguration(NetworkConfiguration.SIM_PREFERRED)<br/><br/>
        .loadingUi(true)<br/><br/>
        .build()<br/><br/>
        
</p>
       </div>
      <h4>Show Connection</h4>
      <p>Display a view with current state and option to connect with two different method (bluetooth and websocket) and disconnect.</p>
        <div className='code' style={{width:'100%'}}>
       
      <p>  
      nearpayProxy.showConnection();
</p>
       </div>
       
        
        </div>
            
 
            <div className='Quick-btn'>
                <button>Next</button>
            </div>

    </div>
  )
}

export default Screen1