import React from 'react'
import '../../style/Compilance/level.css'
import Card from './Card'
const Levels = () => {
  return (
    <div className='level'>
        <div className='section1'><h3>level 2</h3></div>
        <div className='section2'>
            <Card   />
            <Card   />
            <Card   />
            <Card   />
            <Card   />
        </div>
    </div>
  )
}

export default Levels