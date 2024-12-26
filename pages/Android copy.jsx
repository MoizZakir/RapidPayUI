import React from 'react'
import Navbar from '../components/Navbar'
import Side from '../components/Side'
import Screen1 from '../components/Android/Screen1'

const Android = () => {
  return (
    <div style={{}} >
        <Navbar/>
        <div className='' style={{display:'flex',alignItems:'start',justifyContent:'center'}}>
            <Side/>
            <Screen1/>

        </div>
    </div>
  )
}

export default Android