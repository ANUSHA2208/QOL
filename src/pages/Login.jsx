import React, { useRef, useState } from 'react'
import signin from '../assets/login.png'
import signup from '../assets/signup.png'
import { Link } from 'react-router-dom'

export const Login = () => {

  const container = useRef(null);
  const [isContain,setIsContain] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName]=useState("");

  const handleClick2 = () => {

    if(!isContain){
      container.current.classList.add("sign-up-mode");
    }

    else{
      container.current.classList.remove("sign-up-mode");
    }
  }

  const handleClick = async() => {
    // console.log(email,password)
    let result = await fetch("http://localhost:8000/api/v1/login",{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    result= await result.json()
    console.log(result)
  }

  const handleSignUp = async() => {
    // console.log(email,password)
    let result = await fetch("http://localhost:8000/api/v1/signup",{
      method:"post",
      body:JSON.stringify({name,email,password}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    result= await result.json()
    console.log(result)
  }

  return (
    <div className="container" ref={container}>
  <div className="forms-container">
    <div className="signin-signup">
      <form action="#" className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Email" 
          onChange={(e)=>setEmail(e.target.value)} value={email} />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password" 
          onChange={(e)=>setPassword(e.target.value)} value={password} />
          
        </div>
        <button className="button-81" role="button">
          <Link to="/signin" onClick={handleClick}>Login</Link>
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
          <input type="text" placeholder="Username" 
          onChange={(e)=>setName(e.target.value)} value={name}/>
        </div>
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input type="email" placeholder="Email" 
          onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password" 
           onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </div>
      
        <button className="button-81" role="button">
        
        <Link to="/signup" onClick={handleSignUp}>Sign up</Link>

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
          style={{ color: "#fff", cursor: "pointer" }} onClick={() =>{
          setIsContain(!isContain);
            
            handleClick2()}
        }
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
          onClick={handleClick2}>
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