import React from 'react'
import './Navigation.css'
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <div className="navigation">
      <div className="navigationwrapper">
        <div className="navigation-item">
          LOGO
        </div>
        <div className="nav">
          <div className="navigation-item">
            <Link to="/">Ribben chart</Link>
          </div>
          <div className="navigation-item">
            <Link to="/Bubble">Bubble</Link>
          </div>
          <div className="navigation-item">
            <Link to="/Line">Line</Link>
          </div>
          <div className="navigation-item">
            <Link to="/Card">Card</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation