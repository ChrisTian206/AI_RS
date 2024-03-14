import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>

                <Navbar.Brand href="/">
                    <Image src='https://static.wixstatic.com/media/b1603e_c62e5b2318cf43069ed64183b4bada34~mv2.webp' roundedCircle width='50px' height='50px' />
                    <span className='brand-text'> Azula AI</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Listings</Nav.Link>
                        <Nav.Link href="#action2">Inquery</Nav.Link>
                        <NavDropdown title="About Us" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">What wo do?</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Contact
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                career
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">
                            Ask Azula AI
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header