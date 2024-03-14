import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>

                <Navbar.Brand href="/">
                    <img src='https://static.wixstatic.com/media/b1603e_c62e5b2318cf43069ed64183b4bada34~mv2.webp'
                        width='40px' height='40px' />
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
                        <NavDropdown title="Login" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Register</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
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