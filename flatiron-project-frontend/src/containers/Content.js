import React from 'react'
import SignUp from '../components/SignUp'

class Content extends React.Component{
    state = {
        showing: null
    }
    //Based on state in content, component will return different
    //content (eg. Home, Projects)

    signUp = () => {
        this.setState({showing: 'signup'})
    }

    render(){
        return (
            <div>
            { this.state.showing ? 
            <div>
                <SignUp/>
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
                    <button onClick={this.signUp}>Sign Up</button>
                </div>
                <div className="Project-page">

                </div>
            </div> 
            }
            </div>
        )
    }
}

export default Content