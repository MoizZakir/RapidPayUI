import React, { useState } from 'react'
import '../../style/forget/screen1.css'
import { useNavigate } from 'react-router-dom';
import { FaRegHandshake } from 'react-icons/fa';
import { MdOutlineQuestionMark } from 'react-icons/md';




// import "./SignInPage.css";

const Screen1 = () => {
 const navigate=useNavigate()
 
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address!");
    } else {
      setMessage("Password reset link has been sent to your email!");
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-left">
        <div className="forgot-password-box">
          <h1 className="forgot-password-title">Forgot Password</h1>
          <p className="forgot-password-subtitle">
            Enter your email address to reset your password
          </p>
          {message && <div className="message-box">{message}</div>}
          <form className="forgot-password-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="forgot-password-button">
              Send Reset Link
            </button>
          </form>
          <p style={{marginTop:"10px"}} className="forgot-password-subtitle">
            Back to <span style={{color:'blue', cursor:'pointer'}} onClick={()=>navigate('/signin')}>Login</span>
          </p>
        </div>
      </div>
      <div className="forgot-password-right">
        {/* <img src="https://rapidgateway.pk/assets/images/lLogo.png"  alt="Forgot Password" className="forgot-password-image" /> */}
        <MdOutlineQuestionMark size={300} color='blue' />
      </div>
    </div>
  );

};
export default Screen1;
