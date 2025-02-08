import React from 'react'
import '../../style/Quick/screen1.css'
import ReactDOM from 'react-dom'
import ReactCodeSinppet from 'react-code-snippet'
import {Snippet} from "@nextui-org/snippet";

const Screen1 = () => {
  const code=`Long amount = 100L; // [Required] ammount you want to set . 
String customerReferenceNumber = ""; // [optional] any number you want to add as a refrence
Boolean enableReceiptUi = true; // [optional] true will enable the ui and false will disable
Boolean enableReversal = true; // it will allow you to enable or disable the reverse button
Long finishTimeOut = 10L; // Add the number of seconds 
UUID transactionId = java.util.UUID.randomUUID(); // You can add your UUID here which allows you to ask about the transaction again using the same UUID
Boolean enableUiDismiss = true ;// [optional] it will allow you to control dismissing the UI

Rapid
SoftPos.purchase(amount, customerReferenceNumber, enableReceiptUi, enableReversal, finishTimeOut,transactionId,enableUiDismiss, new PurchaseListener() {
    @Override
    public void onPurchaseApproved(@NonNull TransactionData transactionData) {
        // if you wish to get the receipt in Json format use ReceiptUtilsKt.toJson(list.get(0))
        //write your code here. 
    }

    @Override
    public void onPurchaseFailed(@NonNull PurchaseFailure purchaseFailure) {
    
    }
});
`
    
  return (
    <div className='quick-screen1'>
        <h3>Quick Start</h3>
        <p>This section provides a step-by-step guide for creating your first purchase transaction.</p>
        <div>
            <h5>Before you begin
            </h5>
        <p>The Rapid
SoftPos team is required to create a sandbox account for you using your email and phone number, as well as your Android package name to initiate this integration process.</p>
        <p>Additionally, you must possess an Android physical device capable of supporting NFC to test the integration and run the app on it.</p>
        
        </div>
        <div>
            <h5>Start your first transaction</h5>
        
        <ol>
            <li>1.Ensure that you download the Rapid
SoftPos-sdk plugin by adding this dependency to your project.</li>
          
        
       <ReactCodeSinppet lang="jsx" code={`// Add it to your build.gradle

dependencies {
    implementation("io.Rapid
SoftPos:Rapid
SoftPos-sdk-store:2.1.88")
}

`}>
                  <div>Java</div>
                </ReactCodeSinppet>
       
            <li>2.To create a single instance of a Rapid
SoftPos object with context, you can do so wherever you need it.</li>
            <ReactCodeSinppet  lang="jsx" code={`Rapid
SoftPos Rapid
SoftPos = new Rapid
SoftPos.Builder()
        .context(this)
        .authenticationData(new AuthenticationData.UserEnter)
        .environment(Environments.SANDBOX)
        .locale(Locale.getDefault())
        .networkConfiguration(NetworkConfiguration.SIM_PREFERRED)
        .uiPosition(UIPosition.CENTER_BOTTOM)
        .paymentText(new PaymentText("يرجى تمرير الطاقة", "please tap your card"))
        .loadingUi(true)
        .build();

`}>
                  <div >Java</div>
                </ReactCodeSinppet>
       
      
        
       
            <li>3.Purchase transaction</li>
          
        
        <ReactCodeSinppet lang="jsx" code={`Long amount = 100L; // [Required] ammount you want to set . 
String customerReferenceNumber = ""; // [optional] any number you want to add as a refrence
Boolean enableReceiptUi = true; // [optional] true will enable the ui and false will disable
Boolean enableReversal = true; // it will allow you to enable or disable the reverse button
Long finishTimeOut = 10L; // Add the number of seconds 
UUID transactionId = java.util.UUID.randomUUID(); // You can add your UUID here which allows you to ask about the transaction again using the same UUID
Boolean enableUiDismiss = true ;// [optional] it will allow you to control dismissing the UI

Rapid
SoftPos.purchase(amount, customerReferenceNumber, enableReceiptUi, enableReversal, finishTimeOut,transactionId,enableUiDismiss, new PurchaseListener() {
    @Override
    public void onPurchaseApproved(@NonNull TransactionData transactionData) {
        // if you wish to get the receipt in Json format use ReceiptUtilsKt.toJson(list.get(0))
        //write your code here. 
    }

    @Override
    public void onPurchaseFailed(@NonNull PurchaseFailure purchaseFailure) {
    
    }
});

`}>
                  <div>Java</div>
                </ReactCodeSinppet>
                </ol>
       
        
        </div>
            <p>Your setup is complete, allowing you to test the payment feature. Follow our detailed SDK flow description for guidance after installing the application.</p>
            
            <div className='Quick-btn'>
                <button>Next</button>
            </div>

    </div>
  )
}

export default Screen1