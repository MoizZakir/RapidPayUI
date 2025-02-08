import React from 'react'
import '../../style/Quick/screen1.css'
import ReactDOM from 'react-dom'
import ReactCodeSinppet from 'react-code-snippet'


const Screen1 = () => {
    
  return (
    <div className='quick-screen1'>
        <h3>Web-Sdk</h3>
        <p>Rapid
SoftPos Web SDK is responsible for connecting, sending, and receiving data with the POS device using a web application interface.</p>
        <div>
            
        <p>Rapid
SoftPos SDK will offer 2 ways of connecting to the POS RemotePos and USBPos.</p>
       
        
        </div>
        <div>
            <h4>Installation</h4>
            <p>To install the package use</p>
            <ReactCodeSinppet lang="jsx" code={` npm i @Rapid
SoftPosdev/web-sdk`}>
    <div>React Native</div>
  </ReactCodeSinppet>
           
        
        
        
      <h4>Remote Connection</h4>
            <ReactCodeSinppet lang="jsx" code={` import { RemotePos, Environments } from "@Rapid
SoftPosdev/web-sdk";

const pos = new RemotePos({ environment: Environments.sandbox });`}>
    <div>React Native</div>
  </ReactCodeSinppet>
       
       
       <p>This object should only be created once, followed by creating a session with it.</p>
            <ReactCodeSinppet lang="jsx" code={`const session = await pos.createSession({ pairing_code: "123456" });

console.log("token: ", session.token);

localStorage.setItem("remote-token", session.token);`}>
    <div>React Native</div>
  </ReactCodeSinppet>
        
       
       
        
        </div>
            <p>session token will be used in the next connections, so you can save it in local storage to connect with the old token use the method pos.getSession</p>
            <ReactCodeSinppet lang="jsx" code={`const session = await pos.getSession({ token: "hkjasd678asd8yhkjasd8utg" });`}>
    <div>React Native</div>
  </ReactCodeSinppet>
            
       <div>
        <h4>USB Connection</h4>
        <p>To connect with USBPos first create a POS object</p>
        <ReactCodeSinppet lang="jsx" code={`import { USBPos, Environments } from "@Rapid
SoftPosdev/web-sdk";

const pos = new USBPos({ environment: Environments.sandbox });`}>
    <div>React Native</div>
  </ReactCodeSinppet>
        <p>This POS object should be instantiated once before creating a session with it.</p>
        <ReactCodeSinppet lang="jsx" code={`const session = await pos.createSession();

console.log("token: ", session.token);

localStorage.setItem("usb-token", session.token);`}>
    <div>React Native</div>
  </ReactCodeSinppet>
        <p>session token will be used in the next connections, so you can save it in local storage to connect with the old token use the method pos.getSession</p>
        <ReactCodeSinppet lang="jsx" code={`// use token saved from old connection
const session = await pos.getSession({ token: "hkjasd678asd8yhkjasd8utg" });`}>
    <div>React Native</div>
  </ReactCodeSinppet>
       </div>
       <div>
        <h4>Terminal</h4>
        <p>The Terminal object is obtained via session.getTerminal, handles queries and transactions.</p>
        <ReactCodeSinppet lang="jsx" code={`const terminal = await session.getTerminal();`}>
    <div>React Native</div>
  </ReactCodeSinppet>
        <p>You must know these examples that demonstrate how to use the terminal object.</p>
       
        <ReactCodeSinppet lang="jsx" code={`// gets information about this terminal
terminal.getInfo();

// will generate a purchase transaction job with 1 SR
terminl.purchase({ amount: 100 });

// will generate a refund transaction job with 1 SR
terminal.refund({
  amount: 100,
  original_transaction_uuid: "9e5e0d5c-3ce9-414a-88b1-9e09587b7266",
});

// reverse a transaction with (original_transaction_uuid)
terminal.reverse({
  original_transaction_uuid: "9e5e0d5c-3ce9-414a-88b1-9e09587b7266",
});

// reconcile this terminal
terminal.reconcile({});

// get a transaction with uuid
terminal.getTransaction({
  transaction_uuid: "9e5e0d5c-3ce9-414a-88b1-9e09587b7266",
}); 

// reconcile this terminal
terminal.getTransactionsList({ page: 1, page_size: 10 });

terminal.getReconciliation({
  reconciliation_uuid: "9e5e0d5c-3ce9-414a-88b1-9e09587b7266",
});

terminal.getReconciliationsList({ page: 1, page_size: 10 });

terminal.stateListener((state) => console.log(state));`}>
    <div>React Native</div>
  </ReactCodeSinppet>
       </div>
            <div className='Quick-btn'>
                <button>Next</button>
            </div>

    </div>
  )
}

export default Screen1