import React, { Component } from 'react'
import { Redirect, Route } from "react-router-dom";
import {getToken} from '../util/auth';

export default class ProtectedRoute extends Component {
  render() {
    const { component :Component, ...rest} = this.props;
    const token=getToken()==='undefined'?false:getToken();
    console.log(getToken())
    return (
      <Route {...rest} render={(props) => (

        token?(<Component {...props} />) :(<Redirect to='/login' />)
   
     )} />
    )
  }
}
