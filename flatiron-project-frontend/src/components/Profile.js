import React from 'react'

class Profile extends React.Component {
    state = {
        projects: []
    }
    date = new Date(this.props.user.created_at)
    
    parseUserCreated = () => {
        return this.date.toDateString()
    }
    
    componentDidMount(){
        fetch('http://localhost:3000/projects')
        .then(response => response.json())
        .then(data => console.log(data))
    }
    
    render(){

        return (
            <div className="Profile-page">
                <div className="Profile-page-header">
                    Username: {this.props.user.username}
                    <br/>
                    <br/>
                    Member since: {this.parseUserCreated()}
                </div>
                <div>
                    {/*For each projectObject in the states project array, create a project list item or card*/}
                    {/* Here will be a list of this users uploaded projects */}
                </div>
            </div>
        )
    }
}
export default Profile