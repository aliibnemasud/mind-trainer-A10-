import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../img/Group 53.png';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
      
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
                    <Nav className='ms-auto navbar-links'>
                        <CustomLink to="/" className='nav-link'>Home</CustomLink>
                        <CustomLink to="/services" className='nav-link'>Services</CustomLink>
                        <CustomLink to="/about" className='nav-link'>About</CustomLink>
                        <CustomLink to="/checkout" className='nav-link'>Checkout</CustomLink>
                        <CustomLink to="/registered" className='nav-link'>Registered</CustomLink>

                        {user?.uid ? <button className='btn btn-warning rounded signBtn' onClick={logout}>Sign Out</button> :<Link to="/login" className='btn btn-primary signBtn'>Login</Link>}                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;