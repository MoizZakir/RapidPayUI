import React from 'react'
import '../style/homescr4.css'
import { RiAndroidFill, RiFlutterFill } from 'react-icons/ri'
import { FaApple, FaChrome, FaJava, FaReact } from 'react-icons/fa'
import { IoLogoJavascript, IoLogoWindows } from 'react-icons/io'
import { SiKotlin } from 'react-icons/si'
import { GrSwift } from 'react-icons/gr'

const HomeScreen4 = () => {
  const text = ` 
  nearpay.purchase(amount, object : PaymentListener {
  override fun onPaymentApproved(result: PaymentResult) {
      //your implementation
  }
  override fun onPaymentDeclined(result: PaymentResult) {
      //your implementation${<br />}
  }
  override fun onPaymentError(errorType: PaymentError) {
      //your implementation
  }
});`
  return (
    <div className='homescreen4'>
      <div className="homescreen4-section1">
        <div>
          <h1>We support all platforms & languages</h1>
          <p>Whether Java or Kotlin, our updated SDK supports your app. We prioritize security and functionality to match evolving standards.</p>
          <p style={{ color: 'black', marginTop: '25px' }}>Platform</p>
        </div>

        <div className='pltform' style={{ display: 'flex', gap: "50px", flexWrap: 'wrap', paddingRight: '20px' }}>
          <RiAndroidFill color='gray' size={60} />
          <FaApple color='gray' size={60} />
          <FaChrome color='gray' size={60} />
          <IoLogoWindows color='gray' size={60} />


        </div>
        <p style={{ color: 'black', marginTop: '25px' }}>Languages & Frameworks</p>
        <div className='frameworks' style={{ display: 'flex', gap: "30px", flexWrap: 'wrap', paddingRight: '20px' }}>
          <FaJava color='gray' size={60} />
          <SiKotlin color='gray' size={60} />
          <GrSwift color='gray' size={60} />
          <IoLogoJavascript color='gray' size={60} />
          <RiFlutterFill color='gray' size={60} />
          <FaReact color='gray' size={60} />



        </div>

      </div>
      <div className="homescreen4-section2">
        <h2 style={{ marginBottom: "10px" }}>RapidPay SDK</h2>
        <textarea value={text} readOnly={true} style={{
          backgroundColor: 'black', color: "white", width: '95%', minHeight: "400px", fontSize: '19px', padding: '20px', borderRadius: '10px', border: 'none'

        }} name="" id="">

        </textarea>

      </div>


    </div>
  )
}

export default HomeScreen4