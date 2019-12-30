import React from 'react'
import SignUp from '../components/SignUp'
import ProjectForm from '../components/ProjectForm.js'
import Login from '../components/Login.js'

class Content extends React.Component{
    //Based on state in content, component will return different
    //content (eg. Home, Projects)

    renderSwitch = (showing) => {
        switch (showing) {
            case 'login':
                return (
                    <div>
                        <Login signIn={this.props.signIn}/>
                    </div>
                );
            case 'signup':
                return (
                    <div>
                        <SignUp signIn={this.props.signIn}/>
                    </div>
                );
            default:
                return (
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
                );
        }
     }


    render(){
        return (
            <div>
                {this.renderSwitch(this.props.showing)}    
            </div>
        )
    }
}

                 
      

export default Content

