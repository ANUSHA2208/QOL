import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

export const Btn1 = ({signinText,delay}) => {
 

  
  
  return (
    <div className="button">
    <button className="button-48" role="button" >
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
