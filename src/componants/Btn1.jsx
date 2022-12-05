import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

export const Btn1 = ({signinText,delay}) => {
  const getAuth= () => {
    return localStorage.getItem("AUTH") ? localStorage.getItem("AUTH") : null 
  }
  const [auth,setAuth] = useState(getAuth())
  
  const headers = {
    'Authorization' : `Bearer ${auth}`
  }

  function getAllHistory(){
    axios.get('http://localhost:8000/api/v1/history', {
      headers: headers
    })
    .then(function (response) {
      localStorage.setItem('history',JSON.stringify(response.data.data))
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  return (
    <div className="button">
    <button className="button-48" role="button" onClick={getAllHistory}>
      <Link to="/history">
        <span className="text">{signinText}</span>
      </Link>
    </button>
    <p>OR</p>
    <button className="button-48" role="button">
      <Link to="/test">
        <span className="text">{delay}</span>
      </Link>
    </button>
  </div>
  )
}
