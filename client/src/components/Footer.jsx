import React from 'react'
import { Container, Row, Col, InputGroup, Button, Form } from 'react-bootstrap'
import { BsInstagram, BsTwitterX, BsTiktok } from "react-icons/bs";
import IOSDownLoad from '../assets/ios download.svg'
import AdDownLoad from '../assets/adriod download.svg'

function Footer() {
    return (
        <footer>
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

                    </Col>
                    <Col className='text-center py-3' md={4} >
                        <p style={{ fontWeight: 'bold' }}>Terms</p>

                    </Col>
                    <Col className='text-center py-3' md={4} >
                        <p style={{ fontWeight: 'bold' }}>Help</p>

                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Footer