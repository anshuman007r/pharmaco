import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        console.log(this.props)
        // const style={
        //     backgroundColor : this.props.location.state.backgroundColor,
        //     textAlign : 'center'
        // }
        return (
            <div style={{
                backgroundColor : this.props.location.state.backgroundColor,
                textAlign : 'center',
                height : '1000vh'
            }}>
                Hello
                <button onClick={()=>this.props.history.goBack()}>go back to Home page</button>
            </div>
        )
    }
}
