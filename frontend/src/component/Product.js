import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Product extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                Product
                <Link to='/AboutUs'  className = 'linkTag'>About us</Link>
            </div>
        )
    }
}
