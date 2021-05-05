import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div > 
        <ul className="header">
          <li>
            <Link className="linkTag" to="/">Home</Link>
          </li>
          <li>
            <Link className="linkTag" to="/AboutUs">About</Link>
          </li>
          <li>
            <Link className="linkTag" to="/Product">Product</Link>
         </li>
         <li>
            <Link className="linkTag" to="/ContactUs">Contact </Link>
         </li>
        </ul>
      </div>
    )
  }
}