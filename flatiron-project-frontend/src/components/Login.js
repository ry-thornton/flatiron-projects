import React from 'react'

class Login extends React.Component{
    state = {
        username: "",
        password: ""
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.signIn(this.state.username)
    }

    render(){
        return (
            <div className="Login-form">
                Login
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="username" placeholder="Username" onChange={this.changeHandler}/>
                    <br/>
                    <br/>
                    <input type="password" name="password" placeholder="Password" onChange={this.changeHandler}/>
                    <br/>
                    <br/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default Login