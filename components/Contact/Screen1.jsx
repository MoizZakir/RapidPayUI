import React from 'react'
import '../../style/Contact/screen1.css'

const Screen1 = () => {
  return (
    <div className='contact-screen1'>
      <div className='section1'>
        <h2>Interested? Sign up below
        </h2>
        <p>Feel free to sign up, and our team will promptly get in
           touch with you within the next 24 hours. Your interest means
           a lot to us, and we're eager to connect and discuss how we can assist you further.</p>
        <img src="https://rapidgateway.pk/assets/images/mobile_app.png" alt="" />
      </div>
      <div className='section2'>

      <form action="">
        <div class="form-group">
            <label for="name">Name *</label>
            <input type="text" id="name" name="name" required/>
        </div>
        <div class="form-group">
            <label for="company">Company name *</label>
            <input type="text" id="company" name="company" required/>
        </div>
        <div class="form-group" style={{width:"100%"}}>
            <label for="email">Email *</label>
            <input type="email" id="email" name="email" required/>
        </div>
        <div class="form-group">
            <label for="phone">Phone number *</label>
            <input type="tel" id="phone" name="phone" required/>
        </div>
        <div class="form-group">
            <label for="country">Country *</label>
            <select id="country" name="country" required>
                <option value="">Select Your Country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                </select>
        </div>
        <div class="form-group" style={{width:"100%"}}>
            <label for="message">Anything else?</label>
            <textarea id="message" name="message"></textarea>
        </div >

        <div style={{width:'100%', display:"flex",flexWrap:'wrap', justifyContent:'space-between', position:'relative'} }>
            <label style={{fontWeight:'bold', position:'absolute'}} for="message">Select your type</label>
          <div className='type' style={{}}>
          <p style={{fontWeight:'bold'}}>Merchants</p>
          <p style={{fontSize:"14px", color:'gray'}}>Provides solutions for merchants to enable them to sale to their consumers.</p>

          </div>
          <div className='type' style={{}}>
            <p style={{fontWeight:'bold'}}>Merchants</p>
            <p style={{fontSize:"14px", color:'gray'}}>Accept Payment from credits cards</p>

          </div>



        </div>
        

        <div style={{width:"100%", marginTop:'10px', display:'flex',flexWrap:'wrap', justifyContent:'space-between'}}>
        <div class="form-group">
            <label for="phone">How many merchants do you have?
*</label>
            <input type="number" id="phone" name="phone" required/>
        </div>
        <div class="form-group">
            <label for="phone">What are the total sales for your merchants?
*</label>
            <input type="number" id="phone" name="phone" required/>
        </div>
        <div class="form-group">
            <label for="phone">Are you a bank or payment services provider?
*</label>
            <input style={{height:"20px", width:"15px"}} type="radio" id="phone" name="phone" required />Bank
            <input style={{height:"20px", width:"15px"}} type="radio" id="phone" name="phone" required />Payment Services Provider
            <input style={{height:"20px", width:"15px"}} type="radio" id="phone" name="phone" required />Others
  
        </div>
       
        </div>
        <div class="form-group" style={{width:"100%"}}>
            <label for="phone">Do you have any Application?
*</label>
            <input style={{height:"20px", width:"15px"}} type="radio" id="phone" name="phone" required />Yes
            <input style={{height:"20px", width:"15px"}} type="radio" id="phone" name="phone" required />No
           
        </div>
        <div>
            <button>Submit</button>
        </div>
        
    </form>
      </div>
    </div>
  )
}

export default Screen1