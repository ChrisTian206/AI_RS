import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function Header() {

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
                <Container fluid>

                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <Image src='https://static.wixstatic.com/media/b1603e_c62e5b2318cf43069ed64183b4bada34~mv2.webp' roundedCircle width='50px' height='50px' />
                            <span className='brand-text'> Azula AI</span>
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <LinkContainer to='/listing'><Nav.Link >Listings</Nav.Link></LinkContainer> */}
                            <LinkContainer to='/inquery'><Nav.Link >Inquery</Nav.Link></LinkContainer>
                            <LinkContainer to='/strata'><Nav.Link >Summarize Strata</Nav.Link></LinkContainer>

                            <NavDropdown title="About Us" id="navbarScrollingDropdown">
                                <LinkContainer to='/about-us'><NavDropdown.Item>What wo do?</NavDropdown.Item></LinkContainer>
                                <LinkContainer to='/inquery'><NavDropdown.Item>Contact</NavDropdown.Item></LinkContainer>
                                {/* <NavDropdown.Divider /> */}
                                {/* <NavDropdown.Item href="/career">
                                career
                            </NavDropdown.Item> */}
                            </NavDropdown>


                            <LinkContainer to='/askaway'><Nav.Link> Ask Azula AI</Nav.Link></LinkContainer>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header