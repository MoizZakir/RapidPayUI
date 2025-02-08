import React from 'react'
import '../../style/Career/screen1.css'
import { FaHeart } from 'react-icons/fa'
import { RiTeamFill } from 'react-icons/ri'
import { IoIosRocket } from 'react-icons/io'

const Screen1 = () => {
  return (
    <div className='career-screen1'>
        <div className="section1">
            <div className="section1-sec1">
                <h1>We’re looking for talented people</h1>
                <div className='lines' style={{margin:"0px 20px"}}></div>
                <p className='p2'>Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</p>
                <button>View open Roles</button>
            </div>
            <div className="section1-sec2">
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" />
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" />
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" />
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" />
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" />
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" />
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" />
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" />
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" />
            </div>
        </div>
        <div className="section2">
          <div className="section2-sub1"><img src="https://media.licdn.com/dms/image/v2/D5622AQHur1yKADccmQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1731992879074?e=1735776000&v=beta&t=JFW1-s0limGNqnBxa-AH-3WpAcRJn6NsEgPACfUhTvw" alt="" /></div>
          <div className="section2-sub2">
            <h2>Building the best together.</h2>
            <p>We are a group of builders, engineers, fiddlers and passionate
               people from different backgrounds. We enjoy working together to figure out how
               to break down problems into first principles and then building solutions to solve them Passion</p>
               <div className='react'>
                <div><FaHeart color='blue' /> Passion</div>
                <div><RiTeamFill color='blue' /> TeamWork</div>
                <div><IoIosRocket color='blue' /> Innovation</div>
               </div>
          </div>
        </div>
        <div className="section3">
            <h2>Open roles</h2>
            <div className='lines' style={{margin:0}}></div>
            <div className='section3-sec1'>
              <img src="https://Rapid
SoftPos.io/_ipx/w_640,q_75/%2F_next%2Fstatic%2Fmedia%2Fnot-found.c2d28d7b.png?url=%2F_next%2Fstatic%2Fmedia%2Fnot-found.c2d28d7b.png&w=640&q=75" alt="" />
              <h4>No Open Roles Currently</h4>
              <p>If you're interested in a role outside of our current openings, let us know at hr@Rapid
SoftPos.io</p>
            </div>
        </div>
    </div>
  )
}

export default Screen1