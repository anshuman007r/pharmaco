import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  Home  from './Home'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Product from './Product'
import Login from './Login'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {/* <Route path='/AboutUs' component={AboutUs} /> */}
                        <Route exact path='/' component={Home} />
                        <Route path='/AboutUs' component={AboutUs} />
                        <Route path='/Product' component={Product} />
                        <Route path='/ContactUs' component={ContactUs } />
                        <Route path='/Login' component={Login} />
                    </Switch>
                </Router>
            </div>

        )
    }
}
