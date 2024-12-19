import React from 'react'
import '../../style/Quick/screen1.css'


const Screen1 = () => {
    
  return (
    <div className='quick-screen1'>
        <h3>Quick Start</h3>
        <p>This section provides a step-by-step guide for creating your first purchase transaction.</p>
        <div>
            <h5>Before you begin
            </h5>
        <p>The NearPay team is required to create a sandbox account for you using your email and phone number, as well as your Android package name to initiate this integration process.</p>
        <p>Additionally, you must possess an Android physical device capable of supporting NFC to test the integration and run the app on it.</p>
        
        </div>
        <div>
            <h5>Start your first transaction</h5>
        
        <ol>
            <li>1.Ensure that you download the nearpay-sdk plugin by adding this dependency to your project.</li>
          
        </ol>
        <div className='code' style={{width:'100%'}}>
        <div>Java & Kotlin</div>
      <p>  dependencies &#10627; <br/>
    implementation("io.nearpay:nearpay-sdk-store:2.1.88") <br /> &#10628;
</p>
       </div>
       <ol>
            <li>2.To create a single instance of a NearPay object with context, you can do so wherever you need it.</li>
          
        </ol>
        <div className='code' style={{width:'100%'}}>
        <div>Java & Kotlin</div>
      <p>  
      val nearPay = NearPay.Builder()<br/><br/>
        .context(this)<br/><br/>
        .authenticationData(AuthenticationData.UserEnter)<br/><br/>
        .environment(Environments.SANDBOX)<br/><br/>
        .locale(Locale.getDefault())<br/><br/>
        .networkConfiguration(NetworkConfiguration.SIM_PREFERRED)<br/><br/>
        .uiPosition(UIPosition.CENTER_BOTTOM)<br/><br/>
        .paymentText(PaymentText("يرجى تمرير الطاقة", "please tap your card"))<br/><br/>
        .loadingUi(true)<br/><br/>
        .build();
</p>
       </div>
       <ol>
            <li>3.Purchase transaction</li>
          
        </ol>
        <div className='code' style={{width:'100%'}}>
        <div>Java & Kotlin</div>
      <p>  
      val amount : Long = 100 <br/><br/>
      val customerReferenceNumber = "9ace70b7-977d-4094-b7f4-4ecb17de6753"<br/><br/>
      val enableReceiptUi = true<br/><br/>
      val enableReversal = true<br/><br/>
      val finishTimeOut : Long = 10<br/><br/>
      val requestId = UUID.randomUUID();<br/><br/>
      val enableUiDismiss = true <br/><br/>
      nearPay.purchase(amount, customerReferenceNumber, enableReceiptUi, enableReversal, finishTimeOut, requestId, enableUiDismiss, object : PurchaseListener &#10627;<br/><br/>
        override fun onPurchaseApproved(transactionData: TransactionData) &#10627;<br/><br/>
        TODO("Your Code Here")
        <br/><br/>&#10628;
        <br/><br/>  override fun onPurchaseFailed(purchaseFailure: PurchaseFailure) &#10627;<br/><br/>
        &#10628;
        <br/>&#10628;
      )
</p>
       </div>
       
        
        </div>
            <p>Your setup is complete, allowing you to test the payment feature. Follow our detailed SDK flow description for guidance after installing the application.</p>
 
            <div className='Quick-btn'>
                <button>Next</button>
            </div>

    </div>
  )
}

export default Screen1