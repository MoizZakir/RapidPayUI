import React from 'react'
import Navbar from '../components/Navbar'
import Side from '../components/Side'
import Screen1 from '../components/Prepare/Screen1'

const Prepare = () => {
  return (
    <div style={{}} >
        <Navbar/>
        <div className='prepare' style={{display:'flex',alignItems:'start',justifyContent:'center'}}>
            <Side/>
            <Screen1/>

        </div>
    </div>
  )
}

export default Prepare