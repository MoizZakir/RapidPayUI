import React, { useState } from 'react'
import '../../style/Signin/Screen1.css'
import { useNavigate } from 'react-router-dom';




// import "./SignInPage.css";

const Screen1 = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required!");
    } else {
      setError("");
      alert(`Welcome, ${email}!`);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-left">
        <div className="signin-box">
          <h1 className="signin-title">Rapid <span style={{color:'blue'}}>Pay</span></h1>
<img className='logoimg' src="https://rapidgateway.pk/assets/images/lLogo.png" alt="" style={{width:'70px'}} /> 
          <p className="signin-subtitle">Sign in to continue</p>
          {error && <div className="error-message">{error}</div>}
         
         
          <form className="signin-form" onSubmit={handleSignIn}>
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
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
          <div className="signin-footer">
            <p>
              Forget password? <span style={{color:'blue', cursor:'pointer'}} onClick={()=>navigate('/forget')}>Click here</span>
            </p>
          </div>
        </div>
      </div>
      <div className="signin-right">
        <img
          src="https://rapidgateway.pk/assets/images/lLogo.png" /* Replace with your image URL */
          alt="Sign In"
          className="signin-image"
        />
      </div>
    </div>
  );
};
export default Screen1;
