import React, { useState } from 'react'
import { Form, InputGroup, Container, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios';
import Listing from '../components/Listing';

function AzulaaiPage() {
    const [res, setRes] = useState('');
    const [question, setQuestion] = useState('');

    const submitHandler = async () => {
        console.log("question: ", question)

        const data = await axios.post('http://localhost:8000/api/ai/talk', { question }).then((res) => res.data)
        setRes(data)

        //rookie mistake!!! console.log a status right after setState won't work!!
        // console.log("response from 8000 says: ", res)
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>How can I help you?</h1>
            <Container>
                <p style={{ color: 'orange' }}>*Temporary solution, will implement a chat box below</p>
                <Form>
                    <Row>
                        <InputGroup>
                            <InputGroup.Text style={{ height: '10rem' }}>Talk to Azula AI</InputGroup.Text>
                            <Form.Control
                                as="textarea"
                                aria-label="With textarea"
                                value={question}
                                onChange={(e) => { setQuestion(e.target.value) }} />
                        </InputGroup>
                    </Row>

                    <Row>
                        <div className='mt-3' style={{ textAlign: 'center' }}>
                            {res ?
                                <div>
                                    <h2>Azula AI:</h2>
                                    <p>{res}</p>
                                </div> : ''}
                        </div>
                    </Row>
                    <Row >
                        <Col >
                            <Button className='primary  mt-3' onClick={submitHandler}>submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

        </>
    )
}

export default AzulaaiPage