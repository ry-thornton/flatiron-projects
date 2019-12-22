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
            </Navbar>
        )
    }
}

export default Menu