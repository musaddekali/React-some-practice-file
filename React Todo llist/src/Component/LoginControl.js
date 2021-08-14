import React, { Component } from 'react'

export default class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            isLoggedIn: false
        }
    }

    handleLogin() {
        this.setState({ isLoggedIn: true });
    }

    handleLogout() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutBtn onClick={this.handleLogout}/>;
        } else {
            button = <LoginBtn onClick={this.handleLogin}/>;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
               {button}
            </div>
        )
    }
}

// greeting component 
const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}

//user greeting
const UserGreeting = (props) => {
    return (
        <h1 className="slow">Welcome back !</h1>
    )
}
// guest greeting 
const GuestGreeting = (props) => {
    return (
        <h2 className="slow">Please Login.</h2>
    )
}

//login btn
const LoginBtn = (props) => {
    return (
        <button onClick={props.onClick} className="btn btn-primary">Login</button>
    )
}

//logout btn
const LogoutBtn = (props) => {
    return (
        <button onClick={props.onClick} className="btn btn-danger">Logout</button>
    )
}




