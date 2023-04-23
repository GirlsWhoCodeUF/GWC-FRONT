import React from "react";
import './Login.css'

function Login () {
  return (
    <form>
      <div className="form-inner">
        <h2>Login</h2>
        {/* Error! */}
        <div className="form-group">
          <label htmlFor="name">Email:</label>
          <input type = "text" name="email" id="email" />
      </div>
      <div className="form-group">
           <label htmlFor="password">Password:</label>
           <input type = "password" name="password" id="password" />
      </div>
      </div>
    </form>
  )
}
export default Login;