import React from 'react'

class Profile extends React.Component {
    date = new Date(this.props.user.created_at)
    
    parseUserCreated = () => {
        return this.date.toDateString()
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
                    {/* Here will be a list of this users uploaded projects */}
                </div>
            </div>
        )
    }
}
export default Profile