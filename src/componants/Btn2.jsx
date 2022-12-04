import React from 'react'
import { Link } from 'react-router-dom'

export const Btn2 = ({signinText,delay}) => {
  return (
    <div className="button">
    <button className="button-48" role="button">
      <Link to="/signin">
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
