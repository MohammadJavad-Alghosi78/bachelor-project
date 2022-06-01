import React from 'react';
import Link from 'next/link';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HeaderWrapper } from './style'

const Header = () => {
    return (
        <HeaderWrapper>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Link passHref href="/"><Navbar.Brand>HOME</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link passHref href="/calculation"><Nav.Link>CALCULATION</Nav.Link></Link>
                        <Link passHref href="/about-us"><Nav.Link>ABOUT US</Nav.Link></Link>
                        <Link passHref href="/references"><Nav.Link>REFERNCES</Nav.Link></Link>
                    </Nav>
                    <Nav>
                        <Link passHref href="/login"><Nav.Link href="#deets">LOGIN</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </HeaderWrapper >
    )
}

export default Header