import React from 'react'


class SignUp extends React.Component{
    state={
        username: "",
        password: "",
        organization: ""

    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state)
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.signIn(this.state.username)
    }

    render(){
        return (
            <div className="Signup-form">
                Sign Up
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="username" placeholder="Username" onChange={this.changeHandler}/>
                    <br/>
                    <br/>
                    <input type="password" name="password" placeholder="Password" onChange={this.changeHandler}/>
                    <br/>
                    <br/>
                    <input type="text" name="organization" placeholder="Company or School" onChange={this.changeHandler}/>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SignUp