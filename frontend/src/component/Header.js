import React, { Component } from 'react'
export default class Header extends Component {
  navigate = (nav) =>{
    this.props.props.history.push(nav)
  }
  render() {
    console.log(this.props)
    return (
      <div > 
        <ul className="header">
          <li>
              <button onClick={()=>this.navigate('/')}> Home</button>
          </li>
          <li>
              <button onClick={()=>this.navigate('/AboutUs')}> About Us</button>
          </li>
          <li>
            <button onClick={()=>this.navigate('/Product')}> Product</button>
         </li>
         <li>
            <button onClick={()=>this.navigate('/ContactUs')}> Contact Us</button>
         </li>
        </ul>
      </div>
    )
  }
}