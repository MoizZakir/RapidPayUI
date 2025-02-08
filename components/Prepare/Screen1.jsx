import React from 'react'
import '../../style/Prepare/screen1.css'


const Screen1 = () => {
    const codes=`const fs = require('fs');
    const jwt = require('jsonwebtoken');

function getToken() {
var privateKey = fs.readFileSync('./pos_key.pem');

var terminal = {
  data:{
    ops: "auth",
    client_uuid: "212f66c6-bbfd-4fc7-9f50-31a749145cd1", // provided by Rapid
SoftPos
    terminal_id: "1000003000000006"// get this number from mada
  }
}

return jwt.sign(terminal, privateKey, { algorithm: "RS256"});
}`
  return (
    <div className='prepare-screen1'>
        <h3>Preparing Your App</h3>
        <p>How to securely connect to the Tap to Pay on Phone SDK</p>
        <div>
            <h5>Android Package Name</h5>
        <p>To register your package name in Rapid
SoftPos, follow these steps using the Rapid
SoftPos dashboard:</p>
        <ol>
            <li>Login to the Rapid
SoftPos dashboard here</li>
            <li>Once logged in, navigate to the Apps page</li>
            <li>Add a new App</li>
            <li>Provide the package name and the name of the Android app</li>
        </ol>
        </div>
        <div>
            <h5>Setting Up Terminal</h5>
        <p>To set up a terminal for conducting transactions, please follow these steps:</p>
        <ol>
            <li>Login to the Rapid
SoftPos dashboard here</li>
            <li>Once logged in, navigate to the Terminals page</li>
            <li>Create a new terminal.</li>
            <li>Generate a TRSM code consisting of six hexadecimal digits.</li>
            <li>Decide whether to assign the terminal to an existing merchant (if available) or create a new one.</li>
        </ol>
        <p>By following these steps, you will be able to set up a terminal successfully.</p>
        </div>
        <div>
            <h5>Authentication</h5>
        <p>We have 4 method for login:</p>
       <div className='code'>
        <div>Login with JWT</div>
      <p>  AuthenticationData.Jwt("jwt here");</p>
       </div>
       <div className='code'>
        <div>Login with existing mobile number</div>
      <p>  AuthenticationData.Mobile("+966500000000");</p>
       </div>
       <div className='code'>
        <div>Login with existing email</div>
      <p>  AuthenticationData.Email("Rapid
SoftPos@Rapid
SoftPos.io");</p>
       </div>
        </div>
        <div>
            <h5>Allowing your user to login using mobile, email and UserEnter</h5>
        <p>UserEnter, is a way to allow users to enter their mobile number or email to log in. To enable this feature in the Rapid
SoftPos dashboard, there are a few steps that need to be followed. Once completed, users can log in from the App using their email or mobile number.</p>
        <ol>
            <li>Login to the Rapid
SoftPos dashboard here</li>
            <li>Click on the "Terminals" tab.</li>
            <li>Select the terminal you want to invite the user to by clicking on its details.</li>
            <li>Under "Access", select "Invite user".</li>
            <li>Enter the user's details and send the invitation.</li>
        </ol>
        <p>Once the user accepts the invitation, they can log in to the SDK and select the terminal to perform transactions.</p>
        </div>
        <div>
            <h5>Allowing Your User To Login Using JWT</h5>
        <p>To connect your user device to a terminal ID, use your backend to sign the JWT with the following data:</p>
        <ol>
            <li>Login to Rapid
SoftPos Dashboard.</li>
            <li>Go to the credentials page</li>
            <li>You will find the following:</li>
            <ul>
                <li>Client UUID: you will use as client_uuid</li>
                <li>JWT Key: Once you click generate, it will download a file which is the private key (pos_key.pem) that you will use to sign the JWT.</li>
            </ul>
            <li>for terminal_id, you can find all the terminals you have on the terminals page and select one</li>
        </ol>
        
        </div>
        <div className='code2'>
            <div>JavaScript</div>
            <p>{codes.slice(0,30)}<br/>{codes.slice(30,66)} <br/>{codes.slice(66,89)} <br/>{codes.slice(89,140)}
            
            <br/>{codes.slice(140,158)}
            <br/>{codes.slice(158,167)}
            <br/>{codes.slice(167,184)}
            <br/>{codes.slice(184,331)}
            <br/>{codes.slice(331,332)}
            <br/>{codes.slice(332,334)}
            <br/>{codes.slice(334,398)}
            <br/>{codes.slice(398)}


            </p>
        </div>
        <div>
            <h5>Ready to Get Started?</h5>
        <p>Congratulations! You're all set to embark on creating your
             app with our platform. Whether you're a seasoned developer or just
              getting started, we've got you covered to jump right into action.</p>
       
        </div>
        <div>
            <h5>Quick Start Guide</h5>
        <p>If you're excited to start building your app right away and don't want to waste any time,
             our Quick Start guide is perfect for you. It offers simple instructions to quickly set up 
             your environment and start coding.
             You can access the Quick Start guide by clicking here.</p>
       
        </div>
        <div>
            <h5> SDK Page</h5>
        <p>If you want to gain a better understanding of our Tap 
            to Pay on Phone Kits (SDKs) and access them, please visit our
             SDK page. On this page, you will find exhaustive documentation, 
             sample codes, and resources that will help you get the most out of our platform's
              capabilities. We are here to support you every step of the way, so choose your
               preferred path and start turning your ideas into reality!

</p>
       
        </div>
        <div className='prepare-btn'>
                <button>Next</button>
            </div>

    </div>
  )
}

export default Screen1