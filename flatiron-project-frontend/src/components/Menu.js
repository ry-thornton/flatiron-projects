import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Menu extends React.Component {
    render(){
        return (
            <Navbar bg='light' variant='light'>
                <Navbar.Brand>Flatiron Projects</Navbar.Brand>
                <Nav>
                    <Nav.Link>Projects</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Members</Nav.Link>                    
                </Nav>
                {this.props.username ? <Navbar.Collapse className="justify-content-end"><Navbar.Text>Signed in as: {this.props.username} </Navbar.Text></Navbar.Collapse>: null }
            </Navbar>
        )
    }
}

export default Menu