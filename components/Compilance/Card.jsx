import React from 'react'
import '../../style/Compilance/card.css'

const Card = () => {
  return (
    <div className='card'>
        <div className='card-div1'><img src="https://nearpay.io/_next/static/media/visa.6b96beb2.svg" alt="" />
        <h5>Visa</h5>
        </div>
        <p>VISA Level 2 Kernel Certification acquired by Rapid
SoftPos after testing with Applus. This certification
             shows that nearpay has built the Level 2 Kernel to read and process card information.</p>

         <button>View Certifiacte</button>    
    </div>
  )
}

export default Card