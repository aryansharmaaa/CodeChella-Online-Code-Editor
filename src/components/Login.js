import React, { useState } from 'react';
import Signup from './Register';
import '../index.css';
import logo from '../assets/logo.png';
import bg from '../assets/bg.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Here you can perform your authentication logic with the email and password inputs.
    // You can also navigate to a new page or display an error message to the user.
  }

  return (
    <div className="login-box">
      <img src={logo} alt="Logo" className="logo image-container" />
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit" onClick={"/Home"}>Log In</button>
      </form>
      <p className="para"><a href="/ForgotPassword">Forgot Password? </a></p>
      <p className="para">Don't have an account? <a href="/Signup">Sign up</a></p>
    </div>
  );
}

export default Login;
