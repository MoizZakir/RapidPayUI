import React from 'react'
import '../../style/Quick/screen1.css'
import { useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom'
import ReactCodeSinppet from 'react-code-snippet'


const Screen1 = () => {
    const navigate=useNavigate()
  return (
    <div className='quick-screen1'>
        <h3 > Android SDK Proxy</h3>
        <p>SDK connect is a service that allows you to connect your app remotely to the SDK using bluetooth , WiFi.</p>
        <div>
            <h5>Before you begin
            </h5>
        <p>The Rapid
SoftPos team is required to create a sandbox account for you using your email and phone number, as well as your Android package name to initiate this integration process.</p>
       
        
        </div>
        <div>
            <h5>Instialize</h5>
        
        <ol>
            <li>1.Add gradle dependency by adding the following code to the your Android App build.gradle</li>
          
        </ol>
        <ReactCodeSinppet lang="jsx" code={` dependencies {
    implementation 'io.Rapid
SoftPos:Rapid
SoftPos-proxy-v2:0.0.2'
}`}>
           <div>Java</div>
         </ReactCodeSinppet>
       <ol>
            <li>2.Create single instance of Rapid
SoftPos object with context wherever you need.</li>
          
        </ol>
        <ReactCodeSinppet lang="jsx" code={`val Rapid
SoftPosProxy = Rapid
SoftPosProxy.Builder()
                    .port(8080)
                    .context(requireContext())
                    .environment(environment)
                    .networkConfiguration(NetworkConfiguration.SIM_PREFERRED)
                    .loadingUi(true)
                    .build()`}>
           <div>Java</div>
         </ReactCodeSinppet>
       
      <h4>Show Connection</h4>
      <p>Display a view with current state and option to connect with two different method (bluetooth and websocket) and disconnect.</p>
        <ReactCodeSinppet lang="jsx" code={`Rapid
SoftPosProxy.showConnection();`}>
           <div>Java</div>
         </ReactCodeSinppet>
       
       
        
        </div>
            
 
            <div id='btn' className='Quick-btn'>
                <button>Next</button>
            </div>

    </div>
  )
}

export default Screen1