import React from 'react'
import SignUp from '../components/SignUp'
import ProjectForm from '../components/ProjectForm.js'

class Content extends React.Component{
    //Based on state in content, component will return different
    //content (eg. Home, Projects)


    render(){
        return (
            <div>
            { this.props.showing ? 
            <div>
                <SignUp signIn={this.props.signIn}/>
            </div>
            :
            <div>
                <div className="Home-page">
                    <div className="Home-page-greeting">
                        <span className="Logo">Flatiron Projects</span>
                        <br/>
                        <span>A platform for innovation</span>
                    </div>
                    <br/>
                    { this.props.username ?
                    <button onClick={this.props.logout}>Logout</button>
                    :
                    <button onClick={this.props.signUp}>Sign Up</button>}
                </div>
                <div className="Project-page">
                    <ProjectForm/>
    

                </div>
            </div> 
            }
            </div>
        )
    }
}

export default Content