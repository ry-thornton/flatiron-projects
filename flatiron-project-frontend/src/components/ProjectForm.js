import React from 'react'

class ProjectForm extends React.Component{
    state={
        name: "",
        url: "",
        description: ""

    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render(){
        return(
            <div className="Project-form">
            <form onSubmit={this.submitHandler}>
                Post a Project!
                <br/>
                <br/>
                <input type="text" name="name" placeholder="Name" onChange={this.changeHandler}/>
                <br/>
                <br/>
                <input type="url" name="url" placeholder="Url" onChange={this.changeHandler}/>
                <br/>
                <br/>
                <textarea onChange={this.changeHandler} name="description">Description</textarea>
                <br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            </div>
        )
    }
}

export default ProjectForm
