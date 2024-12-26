import React from 'react'
import '../../style/FAQ/screen1.css'
 import  { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { useNavigate } from 'react-router-dom';


const Screen1 = () => {
  const navigate=useNavigate()
  const data = {
   
    rows: [
        {
            title: "4000 - Terminal is reconcile",
            content: `
            <h5 style='color':'black'>Error Message</h5>
            <p>Please wait. terminal is reconsiling</p>
            <hr/>
            <h5>Solution Message</h5>
            <p>Terminal Reconsiled</p>

            
            `,
        },
        {
            title: "4001 - Vendor doesn't exist",
            content: `
            <h5 style='color':'black'>Error Message</h5>
            <p>Vendor does not exist</p>
            <hr/>
            <h5>Solution Message</h5>
            <p>Contact your manager or technical provider</p>

            
            `,
        },

 {
            title: "4001 - Terminal doesn't exist",
            content: `
            <h5 style='color':'black'>Error Message</h5>
            <p>Terminal does not exist</p>
            <hr/>
            <h5>Solution Message</h5>
            <p>Contact your manager or technical provider for a Terminal ID</p>

            
            `,
        },
 {
            title: "4003 - Terminal is updating",
            content: `
            <h5 style='color':'black'>Error Message</h5>
            <p>Please wait, terminal is updating</p>
            <hr/>
            <h5>Solution Message</h5>
            <p>Wait until the terminal finish the update.</p>

            
            `,
        },
 {
            title: "4004 - Terminal is reconcile",
            content: `
            <h5 style='color':'black'>Error Message</h5>
            <p>Please wait, terminal is reconciling</p>
            <hr/>
            <h5>Solution Message</h5>
            <p>Terminal Reconciled.</p>

            
            `,
        },
 {
            title: "4005 - App Version (Payment Plugin) is not Supported",
            content: `
            <h5 style='color':'black'>Error Message</h5>
            <p>Unsupported Version</p>
            <hr/>
            <h5>Solution Message</h5>
            <p>Your App Version is not Supported. Contact your manager or technical provider</p>

            
            `,
        },
 {
            title: "4006 - Client not found",
            content: `
            <h5 style='color':'black'>Error Message</h5>
            <p>Client not found</p>
            <hr/>
            <h5>Solution Message</h5>
            <p>Create a client or choose an exsing one</p>

            
            `,
        },
 {
            title: "4007 - Authorization error, user has to login again",
            content: `
            <h5 style='color':'black'>Error Message</h5>
            <p>Authentication error</p>
            <hr/>
            <h5>Solution Message</h5>
            <p>Please login again</p>

            
            `,
        },
 {
            title: "4008 - Client has to send domain name along with the request",
            content: `
            <h5 style='color':'black'>Error Message</h5>
            <p>Domain not found</p>
            <hr/>
            <h5>Solution Message</h5>
            <p>Contact your manager or technical service provider</p>

            
            `,
        },
 {
            title: "4009 -  When terminal configuration not found",
            content: `
            <h5 style='color':'black'>Error Message</h5>
            <p>Terminal configuration needs to be updated</p>
            <hr/>
            <h5>Solution Message</h5>
            <p>Contact your manager or technical service provider</p>

            
            `,
        },
 {
            title: "4010 - Client and merchant when creating a user",
            content: `
            <h5 style='color':'black'>Error Message</h5>
            <p>Merchant not found</p>
            <hr/>
            <h5>Solution Message</h5>
            <p>Contact your manager or technical provider</p>

            
            `,
        },
        
    ],
};


const styles = {
    bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "red",
    rowContentPaddingTop: '20px',
    rowContentPaddingBottom:'20px'
    
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};
    
  return (
    <div style={{}} className='faq-screen1'>
      <h2 style={{fontWeight:'600'}}>Errors Code</h2>
      <p>Some time an error occurs while using our service. Listed below the most occurrence of the error.</p>
      <Faq style={{border:'1px solid #f1f1f1'}}
                data={data}
                styles={styles}
                config={config}
            />
             
       

             <div className='Quick-btn'>
                <button>Next</button>
            </div>
    </div>
  )
}

export default Screen1