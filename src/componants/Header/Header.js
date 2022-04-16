import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/Group 53.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img height="40px" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>                        
                    </Nav> */}
                    <Nav className='ms-auto'>
                        <Nav.Link><Link to="/" className='nav-link'>Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about" className='nav-link'>Services</Link></Nav.Link>
                        <Nav.Link><Link to="/" className='nav-link'>About</Link></Nav.Link>
                        <Nav.Link><Link to="/login" className='nav-link'>Login</Link></Nav.Link>                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;