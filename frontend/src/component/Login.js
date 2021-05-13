import React, { Component } from 'react'
import { setToken, getToken } from '../util/auth'

export default class Login extends Component {

    loginUser = () =>{
        console.log('hello world')
        setToken('#ABCD$#')
        console.log(getToken())
        this.props.history.push('/')
    }

    render() {
        console.log(this.props)
        return (
            <div style={{
                textAlign : 'center',
                height : '1000vh'
            }}>
                Hello
                <button onClick={this.loginUser}>Login</button>
            </div>
        )
    }
}
