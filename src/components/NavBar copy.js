import { useState, React, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const NavBar = () => {


    return (
        <Navbar sticky="top" variant='dark'>
            <Container>
                <Navbar.Brand id="logo" href="#home"><i class="fa-solid fa-code"></i> <b>Vinay Hudda</b></Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                    <Nav.Link href="#footer">Personal Details</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}


