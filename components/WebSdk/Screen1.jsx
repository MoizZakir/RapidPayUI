import React from 'react'
import '../../style/Quick/screen1.css'


const Screen1 = () => {
    
  return (
    <div className='quick-screen1'>
        <h3>Web-Sdk</h3>
        <p>rapidpay Web SDK is responsible for connecting, sending, and receiving data with the POS device using a web application interface.</p>
        <div>
            
        <p>rapidpay SDK will offer 2 ways of connecting to the POS RemotePos and USBPos.</p>
       
        
        </div>
        <div>
            <h4>Installation</h4>
            <p>To install the package use</p>
        
        
        <div className='code' style={{width:'100%', padding:'10px',height:'max-content'}}>
        
      <p>   
      npm i @rapidpaydev/web-sdk
</p>
       </div>
      <h4>Remote Connection</h4>
        <div className='code' style={{width:'100%'}}>
        
      <p>  
      import  &#10627;RemotePos, Environments &#10628;<br/><br/>
      const pos = new RemotePos&#10627;&#10627;environment: Environments.sandbox &#10628;&#10628;
</p>
       </div>
       <p>This object should only be created once, followed by creating a session with it.</p>
        <div className='code' style={{width:'100%'}}>
      <p>  
        const session = await pos.createSession(&#10627;pairing_code: "123456"  &#10628;); <br/><br/>
        console.log("token: ", session.token);<br/><br/>
        localStorage.setItem("remote-token", session.token);<br/><br/>
     
</p>
       </div>
       
        
        </div>
            <p>session token will be used in the next connections, so you can save it in local storage to connect with the old token use the method pos.getSession</p>
            <div className='code' style={{width:'100%'}}>
      <p>  
      const session = await pos.getSession(&#10627; token: "hkjasd678asd8yhkjasd8utg" &#10628;); <br/><br/>
        
     
</p>

       </div>
       <div>
        <h4>USB Connection</h4>
        <p>To connect with USBPos first create a POS object</p>
        <div className="code">
          import &#10627;USBPos, Environments &#10628; from "@rapidpaydev/web-sdk";
          <br />
          <br />
          const pos = new USBPos(&#10627; environment: Environments.sandbox &#10628; );
        </div>
        <p>This POS object should be instantiated once before creating a session with it.</p>
        <div className="code">
        const session = await pos.createSession();<br/><br/>

console.log("token: ", session.token);<br/><br/>

localStorage.setItem("usb-token", session.token);
        </div>
        <p>session token will be used in the next connections, so you can save it in local storage to connect with the old token use the method pos.getSession</p>
        <div className="code">
        const session = await pos.getSession(&#10627; token: "hkjasd678asd8yhkjasd8utg" &#10628;);
        </div>
       </div>
       <div>
        <h4>Terminal</h4>
        <p>The Terminal object is obtained via session.getTerminal, handles queries and transactions.</p>
        <div className="code">
          <p>const terminal = await session.getTerminal();</p>

        </div>
        <p>You must know these examples that demonstrate how to use the terminal object.</p>
        <div className="code" style={{height:'80vh', overflowY:'scroll'}}>
          <p>terminal.getInfo(); <br/><br/>
          terminl.purchase(&#10627; amount: 100  &#10628;); <br/><br/>
          terminal.refund(&#10627;<br>
          </br>
          amount: 100,
          <br/>
          <br/>
          original_transaction_uuid: "9e5e0d5c-3ce9-414a-88b1-9e09587b7266",
          <br/>
          <br/>
          &#10628;);
          <br />
          <br />
          terminal.reverse(&#10627; 
          <br />
          <br />
          original_transaction_uuid: "9e5e0d5c-3ce9-414a-88b1-9e09587b7266",
          <br />
          <br />
          &#10628;);
          <br />
          <br />
          terminal.reconcile({});
          <br />
          <br />
          terminal.getTransaction(&#10627; 
          <br />
          <br />
          transaction_uuid: "9e5e0d5c-3ce9-414a-88b1-9e09587b7266",
          <br />
          <br />
          &#10628;);
          <br />
          <br />
          terminal.getTransactionsList(&#10627; page: 1, page_size: 10  &#10628;);
          <br />
          <br />
          terminal.getReconciliation(&#10627; 
          <br />
          <br />
          transaction_uuid: "9e5e0d5c-3ce9-414a-88b1-9e09587b7266",
          <br />
          <br />
          &#10628;);
          <br />
          <br />
          terminal.getReconciliationsList(&#10627; page: 1, page_size: 10  &#10628;);
          <br />
          <br />
          terminal.stateListener((state) => console.log(state));



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