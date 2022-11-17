import React, { useRef, useState } from 'react'
import signin from '../assets/login.png'
import signup from '../assets/signup.png'
import { Link } from 'react-router-dom'

export const Login = () => {

  const container = useRef(null);
  const [isContain,setIsContain] = useState(false);

  const handleClick = () => {

    if(!isContain){
      container.current.classList.add("sign-up-mode");
    }

    else{
      container.current.classList.remove("sign-up-mode");
    }
  }
  return (
    <div className="container" ref={container}>
  <div className="forms-container">
    <div className="signin-signup">
      <form action="#" className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="button-81" role="button">
          <Link to="/signin">Login</Link>
        </button>
        <p className="social-text">Or Sign in with social platforms</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </form>
      <form action="#" className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password" />
        </div>
      
        <button className="button-81" role="button">
        <Link to="/signin">Sign up</Link>
        </button>
        <p className="social-text">Or Sign up with social platforms</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </form>
    </div>
  </div>
  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
        <h3>New here ?</h3>
        <br />
        <button
          className="btn transparent"
          id="sign-up-btn"
          style={{ color: "#fff", cursor: "pointer" }} onClick={() => {
            setIsContain(prev => !prev);
            return handleClick();
          }}
        >
          Sign up
        </button>
      </div>
      <img src={signin} className="image" alt />
    </div>
    <div className="panel right-panel">
      <div className="content">
        <h3>One of us ?</h3>
        <br />
        <button
          className="btn transparent"
          id="sign-in-btn"
          style={{ color: "#fff", cursor: "pointer" }}
          onClick={() => {
            setIsContain(prev => !prev);
            return handleClick();
          }}>
          Sign in
        </button>
      </div>
      <img src={signup} className="image" alt />
    </div>
  </div>
</div>

  )
}

export default Login