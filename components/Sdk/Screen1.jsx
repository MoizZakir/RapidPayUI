import React from 'react'
import '../../style/Quick/screen1.css'
import { useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom'
import ReactCodeSinppet from 'react-code-snippet'


const Screen1 = () => {
    const navigate=useNavigate()
  return (
    <div className='quick-screen1'>
        <h3 >SDk</h3>
        
        <div>
            <h5>Instialize</h5>
        
        <ol>
            <li>1.Add gradle dependency by adding the following code to the your Android App build.gradle</li>
          
        </ol>
        <ReactCodeSinppet lang="jsx" code={`npm install "https://github.com/Rapid
SoftPosio/Rapid
SoftPos-react-native-sdk.git#google" --save
// after installing the plugin , please import the package

import { EmbededRapid
SoftPos } from '@Rapid
SoftPosdev/react-native-Rapid
SoftPos-sdk';`}>
    <div>React Native</div>
  </ReactCodeSinppet>
        {/* <div className='code' style={{width:'100%'}}>
       
      <p>  dependencies &#10627; <br/>
      implementation 'io.Rapid
SoftPos:Rapid
SoftPos-sdk-store:2.1.88' <br /> &#10628;
</p>

       </div> */}
<p>Download the plugins</p>
<ReactCodeSinppet lang="jsx" code={`npm install "https://github.com/Rapid
SoftPosio/Rapid
SoftPos-react-native-sdk.git#main" --save
// after installing the plugin , please import the package

import { EmbededRapid
SoftPos } from '@Rapid
SoftPosdev/react-native-Rapid
SoftPos-sdk' `}>
    <div>React Native</div>
</ReactCodeSinppet>
{/* <div className='code' style={{width:'100%'}}>
       
       <p>  dependencies &#10627; <br/>
       implementation 'io.Rapid
SoftPos:Rapid
SoftPos-sdk:2.1.88' <br /> &#10628;
 </p></div> */}
       <ol>
            <li>2.Create single instance of Rapid
SoftPos object with context wherever you need.</li>
          
        </ol>
        
        {/* <div className='code' style={{width:'100%'}}>
        <div>Java & Kotlin</div>
      <p>  
      val Rapid
SoftPos = Rapid
SoftPos.Builder()<br/><br/>
      .context(this)<br/><br/>
      .authenticationData(AuthenticationData.UserEnter)<br/><br/>
      .environment(Environments.SANDBOX)<br/><br/>
      .locale(Locale.getDefault())<br/><br/>
      .networkConfiguration(NetworkConfiguration.SIM_PREFERRED)<br/><br/>
      .uiPosition(UIPosition.CENTER_BOTTOM)<br/><br/>
      ..paymentText(PaymentText("يرجى تمرير الطاقة", "please tap your card"))<br/><br/>
      .loadingUi(true)
      <br/><br/>
      .build()<br/><br/>
        
</p>
       </div> */}
      <h4>When creating an instance for Rapid
SoftPos, you must provide the following parameters:</h4>
     <ol>
      <li><h4>1.Context</h4>
      <p>You need to pass the current context</p></li>
      <li><h4>2.AuthenticationData</h4>
      </li>
     </ol>
      <p>We have 4 method for login:</p>
      <ReactCodeSinppet lang="jsx" code={` const Rapid
SoftPos = new EmbededRapid
SoftPos({
  authtype: AuthenticationType.login, //[Required] the user auth type
  authvalue: "", //[Required] the auth value
  environment: Environments.sandbox, // [Required] the payment environment
  locale: Locale.default, // [Optional]
  arabicPaymentText: "يرجى تمرير الطاقة", // [Optional] optional text field
  englishPaymentText: "please tap your card", // [Optional] optional text field
});`}>
    <div>React Native</div>
</ReactCodeSinppet>
        {/* <div className='code' style={{width:'100%'}}>
       
      <p>  
      AuthenticationData.Jwt("jwt here")
      <br/><br/>
      AuthenticationData.Mobile("+966500000000")
      <br/><br/>
      AuthenticationData.Email("Rapid
SoftPos@Rapid
SoftPos.io")
      <br/><br/>
      AuthenticationData.UserEnter
</p>
       </div> */}
    <h5>3.Environment</h5>
    <p>This will prompt you to select the environment. Please choose "sandbox" and we will notify you when it's time to switch.</p>

    <h5>Purchase</h5>
    <p>Please note that when entering the amount, you should use the format 100, which represents 1.00 SAR.
      ] For instance, if the amount is 14.55, you should enter it as 1455 SAR. The maximum length allowed is
       12 digits, including the exponent (e.g., 123456789012), which will result in 1,234,567,890.12.</p>
       <p>You can use the customerReferenceNumber field to attach a Reference ID to this transaction. If there is no reference ID, simply enter null.</p>
<p>The enableReceiptUi parameter is a boolean, which means you can set it to either true or false based on your preference.</p> 
<ReactCodeSinppet lang="jsx" code={`await Rapid
SoftPos
  .purchase({
    amount: amount, // Required
    transactionId: uuidv4(), //[Optional] speacify the transaction uuid
    customerReferenceNumber: "", // [Optional] referance nuber for customer use only
    enableReceiptUi: true, // [Optional] show the reciept in ui
    enableReversalUi: true, //[Optional] enable reversal of transaction from ui
    finishTimeout: 60, //[Optional] finish timeout in seconds
    enableUiDismiss: true, //[Optional] the ui is dimissible
  })
  .then((response) => {
    console.log(response.receipts);
  }).catch((e) => {
    if (e instanceof PurchaseDeclined) {
      // when the payment declined.
    } else if (e instanceof PurchaseRejected) {
      // Handle purchase rejected
    } else if (e instanceof PurchaseGeneralFailure) {
      // Handle general failure
    } else if (e instanceof PurchaseInvalidStatus) {
      // Handle invalid status
    } else if (e instanceof PurchaseAuthenticationFailed) {
      // when the authentication failed .
    }
    throw e;
  });`}>
    <div>React Native</div>
</ReactCodeSinppet>
{/* <div className='code' style={{width:'100%'}}>
        <div>Java & Kotlin</div>
      <p>  
      val amount : Long = 1455 <br/><br/>
      val customerReferenceNumber = "9ace70b7-977d-4094-b7f4-4ecb17de6753"<br/><br/>
      val enableReceiptUi = true<br/><br/>
      val enableReversal = true<br/><br/>
      val finishTimeOut : Long = 10<br/><br/>
      val requestId = UUID.randomUUID();<br/><br/>
      val enableUiDismiss = true<br/><br/>
      Rapid
SoftPos.purchase(amount, customerReferenceNumber, enableReceiptUi, enableReversal)<br/><br/>
      override fun onPurchaseApproved(transactionData: TransactionData)
      <br/><br/>
      <br/><br/>
        
</p>
       </div> */}
        <h5>Refund</h5>
        <p>Kindly provide the transactionUuid of the transaction you wish to refund.</p>
        <p>The enableReceiptUi parameter is a boolean, which means you can set it to either true or false based on your preference.</p> 
<ReactCodeSinppet lang="jsx" code={`await Rapid
SoftPos
  .refund({
    amount: amount, // [Required]
    originalTransactionUUID: uuid, // [Required] the orginal trnasaction uuid that you want to reverse
    transactionUUID: uuidv4(), //[Optional] speacify the transaction uuid
    customerReferenceNumber: "rerretest123333333", //[Optional]
    enableReceiptUi: true, // [Optional] show the reciept in ui
    enableReversalUi: true, //[Optional] enable reversal of transaction from ui
    editableReversalAmountUI: true, // [Optional] edit the reversal amount from uid
    finishTimeout: 60, //[Optional] finish timeout in seconds
    enableUiDismiss: true, //[Optional] the ui is dimissible
    adminpin: "0000", //[optional] when you add the admin pin here , the UI for admin pin won't be shown.
  })
  .then((response) => {
    console.log(response.receipts);
  }).catch((e) => {
    if (e instanceof RefundAuthenticationFailed) {
      // when the authentication failed .
    } else if (e instanceof RefundGeneralFailure) {
      // Handle general failure
    } else if (e instanceof RefundInvalidStatus) {
      // Handle invalid status
    } else if (e instanceof RefundDeclined) {
      // when the refund is declined.
    } else if (e instanceof RefundRejected) {
      // when the refund is rejected
    }
    throw e;
  });`}>
    <div>React Native</div>
</ReactCodeSinppet>
       <h5>Reverse</h5>
        <p>To perform a Reverse Transaction , it should be within one minute</p>
        <ReactCodeSinppet lang="jsx" code={` await Rapid
SoftPos
  .reverse({
    originalTransactionUUID: uuid, // [Required] the orginal trnasaction uuid that you want to reverse
    enableReceiptUi: true, // [Optional] show the reciept in ui
    finishTimeout: 60, //[Optional] finish timeout in seconds
    enableUiDismiss: true, //[Optional] the ui is dimissible
  })
  .then((response) => {
    console.log(response.receipts);
  }).catch((e) => {
    if (e instanceof ReversalAuthenticationFailed) {
      // when the authentication failed .
    } else if (e instanceof ReversalGeneralFailure) {
      // Handle general failure
    } else if (e instanceof ReversalFailureMessage) {
      // when there is FailureMessage
    } else if (e instanceof ReversalInvalidStatus) {
      // Handle invalid status
    }
    throw e;
  });`}>
    <div>React Native</div>
</ReactCodeSinppet>
        
        
        </div>
            
 
            <div id='btn' className='Quick-btn'>
                <button>Next</button>
            </div>

    </div>
  )
}

export default Screen1