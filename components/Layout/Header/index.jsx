import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HeaderWrapper } from './style'

const Header = () => {
    return (
        <HeaderWrapper>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="#home">HOME</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">CALCULATION</Nav.Link>
                        <Nav.Link href="#features">ABOUT US</Nav.Link>
                        <Nav.Link href="#features">REFERNCES</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">LOGIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </HeaderWrapper>
    )
}

export default Header