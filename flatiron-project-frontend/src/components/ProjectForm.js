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
        this.createProject()
    }

    createProject = () => {
        fetch('http://localhost:3000/projects', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(data => alert(data))
    }
    render(){
        return(
            <div className="Project-form">
            <form onSubmit={this.submitHandler}>
                Upload a Project!
                <br/>
                <br/>
                <input type="text" name="name" placeholder="Name" onChange={this.changeHandler}/>
                <br/>
                <br/>
                <input type="text" name="url" placeholder="Url" onChange={this.changeHandler}/>
                <br/>
                <br/>
                <input type="text" name="description" placeholder="Description" onChange={this.changeHandler}/>
                <br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            </div>
        )
    }
}

export default ProjectForm
