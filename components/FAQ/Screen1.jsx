import React from 'react'
import '../../style/FAQ/screen1.css'
 import  { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { useNavigate } from 'react-router-dom';


const Screen1 = () => {
  const navigate=useNavigate()
  const data = {
    title: "Configuration",
    rows: [
        {
            title: "What are public keys and private keys ?",
            content: `You can create the keys using Security section, public keys are the keys
             that you are going to share it with us and private keys are going to be used in generating the JWT to 
            communicate with rapidpay when using any function like purchase , refund , etc.`,
        },
        {
            title: "Which package name should I share ?",
            content:
                "You need to share the package name for the Android project with the rapidpay team.",
        },
        {
            title: "What are the different environments ?",
            content: `We have three main environments:
            <ol>
<li>SandBox: where you integrate the SDK on Sandbox Environment</li>
<li>Testing: we will test your app with Saudi Payment and get it approved</li>
<li>Production : here you can go live</li></ol>`,
        },
        {
            title: "What Android version can be used with the SDK ?",
            content: "You can use it with android 10 or higher.",
        },
    ],
};
const data2 = {
  title: "Login",
  rows: [
      {
          title: "How can I generate JWT ?",
          content: `<p>Follow the instruction</p>?`,
      },
      {
          title: "What is JWT ?",
          content:
              "JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties..",
      },
      {
          title: "How can I get the client uuid ?",
          content: `rapidpay Team will send you a client uuid once we have received the public key and the android package name.
      `,
      },
      {
          title: "When do I need to logout ?",
          content: "When rapidpay service is no longer needed . For example when the users logout from your app , they need to logout from rapidpay service (means the terminal) as well. So, they cannot use the service when they are logged out .",
      },
  ],
};
const data3 = {
  title: "Transaction",
  rows: [
      {
          title: "What is reconciliation ?",
          content: `Payment reconciliation is an accounting process that verifies account
           balances to ensure all sets of records are true, consistent, and up-to-date. 
          Businesses can reconcile their accounts daily, weekly, or monthly.`,
      },
      {
          title: "What is a customer reference number ?",
          content:
              `Customer reference number is a number that identifies your customer ID,
               so you can assign any number you want as customer reference number , also it 
               is optional so you can leave it empty if you wish. You can use customer reference 
               number in Purchase and Refund.`,
      },
      {
          title: "How can I get the client uuid ?",
          content: `rapidpay Team will send you a client uuid once we have received the public key and the android package name.
      `,
      },
      {
          title: "How can I make a purchase ?",
          content: "You can just call purchase and our UI will show up to make a payment.",
      },
      ,
      {
          title: "How can I know the version of the payment plugin ?",
          content: "Go to Settings - > Apps - > Payment Plugin -> Version",
      },
      {
          title: "When should the developer mode be turned off?",
          content: `Whenever the SDK environment is on production , if the developer mode is
           not off then you can not communicate with rapidpay to make any transactions .`,
      },
      {
          title: "Can the user refund more than the paid amount in the transaction?",
          content: `No , user can not exceed the paid amount .`,
      },
  ],
};

const styles = {
    bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "red",
    rowContentPaddingTop: '10px',
    
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};
    
  return (
    <div style={{}} className='faq-screen1'>
      <h2 style={{fontWeight:'600'}}>FAQ</h2>
      <Faq
                data={data}
                styles={styles}
                config={config}
            />
              <Faq
                data={data2}
                styles={styles}
                config={config}
            />
              <Faq
                data={data3}
                styles={styles}
                config={config}
            />
      
       

    </div>
  )
}

export default Screen1