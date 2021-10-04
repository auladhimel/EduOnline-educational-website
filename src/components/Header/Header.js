import React from 'react';
import { ButtonGroup, Button, Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// header component 
const Header = () => {
    const elementArrow = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <Navbar className="navbar" sticky="top">
            <Container>
                {/* Navigation links  */}
                <Nav className="navigations">
                    <NavLink to="/home" className="link">Home</NavLink>
                    <NavLink to="/about" className="link">About Us</NavLink>
                    <NavLink to="/services" className="link">Courses</NavLink>
                    <NavLink to="/instructors" className="link">Instructors</NavLink>
                    <NavLink to="/services" className="login">Login {elementArrow}</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};
export default Header;