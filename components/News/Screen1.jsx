import React from 'react'
import '../../style/News/Screen1.css'
import { useNavigate } from 'react-router-dom'

const Screen1 = () => {
    const navigate=useNavigate()
  return (
    <div className='news-screen1'>
        <h2>Our News</h2>
        <dir className='lines'></dir>
        <p>Find the latest news, interviews and other articles about us from around the net</p>

        <div className="news">
            <div className='new' onClick={()=>navigate('/news/xy')}>
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" />
                <p>December 12, 2023</p>
                <h5>rapidpay raises $14M in Series A round led by....</h5>
                <p style={{textAlign:'justify', letterSpacing:"0px", marginTop:"5px"}}>
                rapidpay secures $14M in Series A funding, led by Sanabil Investments, with participation from stc Corporate Investment Fund, Vision Ventures, Hala Ventures and</p>
            </div>
            <div className='new' onClick={()=>navigate('/news/xy')}>
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" />
                <p>December 12, 2023</p>
                <h5>rapidpay raises $14M in Series A round led by....</h5>
                <p style={{textAlign:'justify', letterSpacing:"0px", marginTop:"5px"}}>
                rapidpay secures $14M in Series A funding, led by Sanabil Investments, with participation from stc Corporate Investment Fund, Vision Ventures, Hala Ventures and</p>
            </div>
            <div className='new' onClick={()=>navigate('/news/xy')}>
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" />
                <p>December 12, 2023</p>
                <h5>rapidpay raises $14M in Series A round led by....</h5>
                <p style={{textAlign:'justify', letterSpacing:"0px", marginTop:"5px"}}>
                rapidpay secures $14M in Series A funding, led by Sanabil Investments, with participation from stc Corporate Investment Fund, Vision Ventures, Hala Ventures and</p>
            </div>
            <div className='new' onClick={()=>navigate('/news/xy')}>
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" />
                <p>December 12, 2023</p>
                <h5>rapidpay raises $14M in Series A round led by....</h5>
                <p style={{textAlign:'justify', letterSpacing:"0px", marginTop:"5px"}}>
                rapidpay secures $14M in Series A funding, led by Sanabil Investments, with participation from stc Corporate Investment Fund, Vision Ventures, Hala Ventures and</p>
            </div>
            <div className='new' onClick={()=>navigate('/news/xy')}>
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" />
                <p>December 12, 2023</p>
                <h5>rapidpay raises $14M in Series A round led by....</h5>
                <p style={{textAlign:'justify', letterSpacing:"0px", marginTop:"5px"}}>
                rapidpay secures $14M in Series A funding, led by Sanabil Investments, with participation from stc Corporate Investment Fund, Vision Ventures, Hala Ventures and</p>
            </div>
            <div className='new' onClick={()=>navigate('/news/xy')}>
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" />
                <p>December 12, 2023</p>
                <h5>rapidpay raises $14M in Series A round led by....</h5>
                <p style={{textAlign:'justify', letterSpacing:"0px", marginTop:"5px"}}>
                rapidpay secures $14M in Series A funding, led by Sanabil Investments, with participation from stc Corporate Investment Fund, Vision Ventures, Hala Ventures and</p>
            </div>
            

        </div>
    </div>
  )
}

export default Screen1