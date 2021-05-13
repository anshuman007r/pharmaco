import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  Home  from './Home'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Product from './Product'
import Login from './Login'
import ProtectiveRoute from './ProtectiveRoute'
import AuthenticateRoute from './AuthenticateRoute'

class Navigation extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {/* <Route path='/AboutUs' component={AboutUs} /> */}
                        <Route exact path='/' component={Home} />
                        <ProtectiveRoute path='/AboutUs' component={AboutUs} />
                        <ProtectiveRoute path='/Product' component={Product} />
                        <Route path='/ContactUs' component={ContactUs } />
                        <AuthenticateRoute path='/Login' component={Login} />
                    </Switch>
                </Router>
            </div>

        )
    }
}


export default Navigation