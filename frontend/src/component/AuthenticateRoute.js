import React, { Component } from 'react'
import { Route, Redirect} from 'react-router-dom'
import { getToken } from '../util/auth'

export default class AuthenticateRoute extends Component {
    render() {
        const token=getToken()==='undefined'?false:getToken();
        const { component: Component , ...rest} = this.props
        return (
            <Route { ...rest} render={(props)=>(
                    token?(<Redirect to ='/'/> ): (<Component { ...props} />)
            )}/>
        )
    }
}
