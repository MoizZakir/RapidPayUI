import React from 'react'
import '../../style/News/Screen2.css'
import { useNavigate } from 'react-router-dom'

const Screen2 = () => {
    const navigate=useNavigate()
  return (
    <div className='singleNews-container'>
        <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1741219200&v=beta&t=9MDJHFZUWaEIhGFD9yc2GElJReQcfFSCb1cjnocYQLI" alt="" />
       <div className='singleNews-container-content'> <h2>Saudi-based fintech raises close to $3.6m Series A payroll</h2>
       <p>Rapid
SoftPos, a Saudi-based fintech startup, has raised $3.6 million in pre-Series
         A funding round led by Vision Ventures, with participation by Hala Ventures, Arzan
          VC, Palm Ventures, and prominent angel investors.  Founded in 2020 by Mohammed Alaiban
           and Hamzah Alghamdi, Rapid
SoftPos partners with merchants,
         payment providers and startups to enable easy mobile-based soft point of sale services.</p>
         <p>“The field of payments infrastructure is one of the most promising areas in the upcoming years,” Mohammad Alaiban, Co-Founder and CEO of Rapid
SoftPos, tells StartupScene. “What differentiates this field specifically is the ability to innovate in tailoring payment solutions that suit the local and regional markets without having to depend on ready-made technologies from abroad. This in turn localizes technologies which are in line with the Kingdom’s Vision 2030.”</p>
         <p>According to the startup, market demand for “softPOS” solutions is growing rapidly. Contactless payments adoption in Saudi Arabia grew from 4% in 2017 to 94% by the end of 2020, according to a finding by a Visa study, which was done in collaboration with Saudi Payments.</p>
         <p>The new funding will be used to enhance the startup’s offering and expand the team to cope with increased demand.</p>
         <p>Saudi Arabia’s venture capital funding increased three folds so far this year. In the first half of 2022, funding surged to $584 million, surpassing the total for the whole of 2021, according to data platform Magnitt. Some of the lion’s share of funding went to FOODICS raising $170 million in Series C funding; Tamara raising $100 million in Series B round; and HyperPay raising $36.7 million in its latest round of funding.</p>
         <p style={{color:'blue'}}>January 10, 2023</p>
         <p style={{color:'black',textDecoration:'underline', cursor:'pointer' }} onClick={()=>navigate('/news')}>Back to News</p>
       </div>
    </div>
  )
}

export default Screen2