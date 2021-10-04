import React from 'react';
import { ButtonGroup, Button, Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (

        <Navbar className="navbar" sticky="top">
            <Container>
                <Nav className="navigations">
                    <NavLink to="/home" className="link">Home</NavLink>
                    <NavLink to="/about" className="link">About Us</NavLink>
                    <NavLink to="/services" className="link">Courses</NavLink>
                    <NavLink to="/instructors" className="link">Instructors</NavLink>
                    <NavLink to="/contact" className="link">Contact Us</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;