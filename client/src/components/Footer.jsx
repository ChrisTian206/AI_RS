import React from 'react'
import { Container, Row, Col, InputGroup, Button, Form } from 'react-bootstrap'
import { BsInstagram, BsTwitterX, BsTiktok } from "react-icons/bs";
import IOSDownLoad from '../assets/ios download.svg'
import AdDownLoad from '../assets/adriod download.svg'

function Footer() {
    return (
        <footer>
            <div>
                {window.innerWidth > 768 ?
                    <div>
                        <div style={{ backgroundColor: '#343a40', height: '10rem' }}>
                            <h3 className='p-3' style={{ textAlign: 'center', color: 'white' }}>Connect With Us</h3>
                            <Row>
                                <Col md={3} style={{ justifyItems: 'center', textAlign: 'center' }}>
                                    <BsInstagram style={{ height: '48px', width: '48px', color: '#fcfcfc', marginInline: '10px', cursor: 'pointer' }} />
                                    <BsTwitterX style={{ height: '48px', width: '48px', color: '#fcfcfc', marginInline: '10px', cursor: 'pointer' }} />
                                    <BsTiktok style={{ height: '48px', width: '48px', color: '#fcfcfc', marginInline: '10px', cursor: 'pointer' }} />
                                </Col>
                                <Col md={6}>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Your email"
                                            aria-label="Your email"
                                            aria-describedby="basic-addon2"
                                        />
                                        <Button variant="outline-secondary" id="button-addon2">
                                            Subscribe
                                        </Button>
                                    </InputGroup>
                                </Col>
                                <Col md={3}>
                                    <img src={IOSDownLoad} style={{ height: '40px', marginRight: '10px', cursor: 'pointer' }} />
                                    <img src={AdDownLoad} style={{ height: '40px', cursor: 'pointer' }} />
                                </Col>
                            </Row>
                        </div>


                        <Row>
                            <Col className='text-center py-3' md={4} >
                                <p style={{ fontWeight: 'bold' }}>Company</p>
                                <p>About Azula</p>
                                <p>Our Team</p>
                                <p>Press</p>
                                <p>Investor Relations</p>
                                <p>Blog</p>

                            </Col>
                            <Col className='text-center py-3' md={4} >
                                <p style={{ fontWeight: 'bold' }}>Terms</p>
                                <p>Terms of Use</p>
                                <p>Privacy Policy</p>
                                <p>Security</p>
                                <p>Interest-Based Ads</p>

                            </Col>
                            <Col className='text-center py-3' md={4} >
                                <p style={{ fontWeight: 'bold' }}>Help</p>
                                <p>Help</p>
                                <p>Contact Us</p>
                            </Col>
                        </Row>

                        <p className='text-center'>&copy;2024 Azula AI Inc., All Rights Reserved.</p>


                    </div>
                    :
                    <div>
                        <div style={{ backgroundColor: '#343a40' }}>
                            <h3 style={{ color: 'white', textAlign: 'center', paddingTop: '15px' }}>Connect With Us</h3>
                            <Container>
                                <Row>
                                    <InputGroup className="mb-3 pt-2" style={{ paddingInline: '20px' }}>
                                        <Form.Control
                                            placeholder="Your email"
                                            aria-label="Your email"
                                            aria-describedby="basic-addon2"
                                        />
                                        <Button variant="outline-secondary" id="button-addon2">
                                            Subscribe
                                        </Button>
                                    </InputGroup>
                                </Row>
                                <Row className='d-flex justify-content-center align-items-center'>
                                    <BsInstagram style={{ height: '48px', width: '48px', color: '#fcfcfc', marginInline: '10px' }} />
                                    <BsTwitterX style={{ height: '48px', width: '48px', color: '#fcfcfc', marginInline: '10px' }} />
                                    <BsTiktok style={{ height: '48px', width: '48px', color: '#fcfcfc', marginInline: '10px' }} />
                                </Row>
                                <Row className='d-flex justify-content-center align-items-center pt-2'>

                                    <Col style={{ textAlign: 'right', paddingBottom: '20px' }}>
                                        <img src={IOSDownLoad} style={{ height: '40px' }} />
                                    </Col>
                                    <Col style={{ textAlign: 'left', paddingBottom: '20px' }}>
                                        <img src={AdDownLoad} style={{ height: '40px' }} />
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <Row className='mt-2 text-center'>
                            <h2 >
                                Company
                            </h2>

                            <p>About Azula</p>
                            <p>Our Team</p>
                            <p>Press</p>
                            <p>Investor Relations</p>
                            <p>Blog</p>
                        </Row>

                        <Row className='mt-2 text-center'>
                            <h2>
                                Terms
                            </h2>
                            <p>Terms of Use</p>
                            <p>Privacy Policy</p>
                            <p>Security</p>
                            <p>Interest-Based Ads</p>
                        </Row>

                        <Row className='mt-2 text-center'>
                            <h2>
                                Help
                            </h2>
                            <p>Help</p>
                            <p>Contact Us</p>
                        </Row>

                        <p className='text-center'>&copy;2024 Azula AI Inc., All Rights Reserved.</p>
                    </div>
                }
            </div>
        </footer >
    )
}

export default Footer