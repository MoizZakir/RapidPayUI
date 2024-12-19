import React from 'react'
import '../../style/Intro/screen1.css'
import { BiArrowFromRight } from 'react-icons/bi'

const Screen1 = () => {
  return (
    <div className='intro-screen1'>
        <div>
        <h3>Introduction</h3>
        <h5>Build Your Tap to Pay on Phone Now</h5>
        <p>Tap to Pay on Phone is a product offered by NearPay Company. 
            The Tap to Pay on Phone SDK enables you to create a secure and convenient payment
             system in your Android app.
             This system allows you to accept payments on any device quickly and easily.</p>
             <p>Along with accepting payment, the Tap to Pay on Phone SDK provides various features for your app,
                 including purchasing, refunding, reconciling, and more.</p>
                 <p>This guide will help you integrate with the SDK easily by providing all the necessary resources.</p>
                 </div>
      <div>  <h3>Pre-requisites</h3>
        <ul>
            <li>Send your Android package name to integration@nearpay.io.</li>
            <li>Email integration@nearpay.io with a list of users who need access to the sandbox account.</li>
        </ul>
        </div>
        <div>
        <h3>Minimum Requirements</h3>
        <p>These are the minimum requirements for integrating Android devices into Production:</p>

            <table>
                
                    <tr>
                        <th>Requirement</th>
                        <th>Minimum</th>
                  
                    </tr>
                    <tr>
                        <td className='td1'>Android</td>
                        <td className='td2'>	
                        The SDK is compatible with all devices that run on Android 10 (API 29) or a higher version.</td>
                    </tr>
                    <tr>
                        <td className='td1'>Location</td>
                        <td className='td2'>	
                        To integrate with the Tap to Pay on Phone SDK, it is necessary to allow the SDK to access the device's location</td>
                    </tr>
                    <tr>
                        <td className='td1'>Connectivity</td>
                        <td className='td2'>	
                        To ensure the smooth functioning of the Tap to Pay on Phone SDK, it is important to have good
                         connectivity on the device. 
                        The SDK requires Wi-Fi or 4G connectivity to function properly.</td>
                    </tr>
                    <tr>
                        <td className='td1'>Security</td>
                        <td className='td2'>	
                        NearPay has a strict attestation system in place that blocks 
                        devices if any of the following signs are detected:
                        <ul>
                            <li>The APK has been tampered with</li>  
                            <li>The application certificate has been tampered with</li>
                            <li>The application is hooked with specialized tools such as Xposed, Substrate, or Frida.</li>
                            <li>The application is running in debuggable mode or is being debugged.</li>
                            <li>The application is running on a rooted device.</li>
                            <li>The application is running on an emulator.</li>
                            <li>The application is running on a virtual device.</li>
                            <li>The device's bootloader is unlocked</li>
                            <li>Ensure that the Android system is able to generate an Android Keystore</li>
                            </ul> 
                        </td>
                    </tr>
                    <tr>
                        <td className='td1'>Developer Dome/ Options</td>
                        <td className='td2'>	
                        Please ensure that the developer mode is turned off.</td>
                    </tr>
                    <tr>
                        <td className='td1'>NFC</td>
                        <td className='td2'>	
                        Please make sure that the NFC feature is turned on.</td>
                    </tr>
                
            </table>

            <div className='itro-btn'>
                <button>Next</button>
            </div>


        </div>
    </div>
  )
}

export default Screen1