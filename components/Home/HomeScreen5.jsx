import React from 'react'
import '../../style/Home/homeScr5.css'
import { MdStore } from 'react-icons/md'
import { RiRefundLine } from 'react-icons/ri'
import { AiFillReconciliation } from 'react-icons/ai'

const HomeScreen5 = () => {
  return (
    <div className='homeScreen5' id='features'>
      <div className="homeScreen5-first">
        <img src="https://nearpay.io/_next/static/media/mobile-tablet-sdk-left.8b27d2d6.svg" alt="" />
      </div>
      <div className="homeScreen5-second">
        <h1>Create new and innovative transaction experiences</h1>
        <p>Transform your transaction accepting experience using our SDK embedded in your application or using our point of sale app themed with your brand</p>
        <div style={{ display: 'flex', gap: "10px", marginTop: "10px" }}>
          <MdStore className='hm6_icon'  color='#1fb81f' />
          <p style={{ margin: 0,}}><span style={{ fontWeight: '550', color: '#1fb81f' }}>Purchase</span> Your merchants can now easily capture payments from their customers. </p>
        </div>
        <div style={{ display: 'flex', gap: "10px", marginTop: "10px" }}>
          <RiRefundLine className='hm6_icon'  color='#1fb81f' />
          <p style={{ margin: 0 }}><span style={{ fontWeight: '550', color: '#1fb81f' }}>Refund</span> Your merchants can easily refund a transaction for their customers. </p>
        </div>
        <div style={{ display: 'flex', gap: "10px", marginTop: "10px" }}>
          <AiFillReconciliation className='hm6_icon' color='#1fb81f' />
          <p style={{ margin: 0 }}><span style={{ fontWeight: '550', color: '#1fb81f' }}>Reconcile</span> Your merchants can easily reconcile their daily transactions and view their daily totals </p>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen5