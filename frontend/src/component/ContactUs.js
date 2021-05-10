import React, { Component } from 'react'

export default class ContactUs extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                Contact us
                <button onClick={()=>this.props.history.push("/AboutUs")}>About us</button>
            </div>
        )
    }
}
