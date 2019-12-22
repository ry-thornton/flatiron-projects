import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

class Menu extends React.Component {
    render(){
        return (
            <Navbar bg='light' variant='light'>
                <Navbar.Brand>Flatiron Projects</Navbar.Brand>
            </Navbar>
        )
    }
}

export default Menu