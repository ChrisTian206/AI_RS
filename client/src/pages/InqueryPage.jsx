import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

function InqueryPage() {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}> Contact Us</h1 >
            <Container>
                <Form>
                    <Row>
                        <Form.Group as={Col} controlId='name' className='mt-3'>
                            <Form.Label>Name *</Form.Label>
                            <Form.Control type='text' placeholder='your name' required />
                        </Form.Group>

                        <Form.Group as={Col} controlId='cell' className='mt-3'>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type='number' placeholder='your phone number' />
                        </Form.Group>
                    </Row>
                    <Form.Group controlId='email' className='mt-3'>
                        <Form.Label>Email *</Form.Label>
                        <Form.Control type='email' placeholder='your email address' required />
                    </Form.Group>

                    <Form.Group controlId='message' className='mt-3'>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as='textarea' placeholder='Please leave your message...' />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mt-3'>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default InqueryPage