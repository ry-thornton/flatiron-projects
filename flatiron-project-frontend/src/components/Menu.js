import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Menu extends React.Component {


    render(){
        return (
            <Navbar bg='light' variant='light'>
                <Navbar.Brand><span onClick={this.props.home}>Flatiron Projects</span></Navbar.Brand>
                <Nav>
                    <Nav.Link>Projects</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Members</Nav.Link>                    
                </Nav>
                {this.props.username ? <Navbar.Collapse className="justify-content-end"><Navbar.Text>Signed in as: <span onClick={this.props.showProfile}>{this.props.username}</span> </Navbar.Text></Navbar.Collapse>: <Navbar.Collapse className="justify-content-end"><button onClick={this.props.login}>Login</button></Navbar.Collapse> }
            </Navbar>
        )
    }
}

export default Menu