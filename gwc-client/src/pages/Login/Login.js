import React from 'react'
import './Login.css'
import user_icon from '../../components/Assets/person.png'
import email_icon from '../../components/Assets/email.png'
import password_icon from '../../components/Assets/password.png'

const Login = () => {

  return (
    <div>
      <div className='logincontainer'>
        <div className='loginheader'>
            <div className='logintext'>Sign Up</div>
            <div className='loginunderline'></div>
        </div> 
        <div className='inputs'>
            <div className='input'>
                <img src={user_icon} alt="" />
                <input type="text" />
            </div>
            <div className='input'>
                <img src={email_icon} alt="" />
                <input type="email" />
            </div>
            <div className='input'>
                <img src={password_icon} alt="" />
                <input type="password" />
            </div>
        </div>
        <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
        </div>
    </div>
    </div>
    
  );
}

export default Login

