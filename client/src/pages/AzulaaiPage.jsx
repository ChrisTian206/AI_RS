import React from 'react'
import { Form, InputGroup, Container, Row, Col, Button } from 'react-bootstrap'

function AzulaaiPage() {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>How can I help you?</h1>
            <Container>
                <p style={{ color: 'orange' }}>*Temporary solution, will implement a chat box below</p>
                <Form>
                    <Row>
                        <InputGroup>
                            <InputGroup.Text style={{ height: '10rem' }}>Talk to Azula AI</InputGroup.Text>
                            <Form.Control as="textarea" aria-label="With textarea" />
                        </InputGroup>
                    </Row>
                    <Row >
                        <Col >
                            <Button className='primary  mt-3'>submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

        </>
    )
}

export default AzulaaiPage