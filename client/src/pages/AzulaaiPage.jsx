import React, { useState } from 'react'
import { Form, InputGroup, Container, Row, Col, Button, Spinner } from 'react-bootstrap'
import axios from 'axios';
import Listing from '../components/Listing';
import DisplayProperty from '../components/DisplayProperty';

function AzulaaiPage() {
    const [res, setRes] = useState('')
    const [question, setQuestion] = useState('')
    const [load, setLoad] = useState(false)

    const submitHandler = async () => {
        console.log("question: ", question)
        setLoad(true)

        const data = await axios.post('http://localhost:8000/api/ai/talk', { question })
            .then((res) => {
                setLoad(false)
                return res.data
            })
        setRes(data)

        //rookie mistake!!! console.log a status right after setState won't work!!
        // console.log("response from 8000 says: ", res)
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>How can I help you?</h1>
            <Container>
                <p style={{ color: 'orange' }}>*Temporary solution, will implement a chat box below</p>
                <Form onSubmit={submitHandler}>
                    <InputGroup>
                        <InputGroup.Text style={{ height: '10rem' }}>Talk to Azula AI</InputGroup.Text>
                        <Form.Control
                            as="textarea"
                            aria-label="With textarea"
                            value={question}
                            onChange={(e) => { setQuestion(e.target.value) }} />
                    </InputGroup>


                    <div className="d-flex justify-content-center mt-2">
                        <Button onClick={submitHandler}>Submit</Button>
                    </div>

                </Form>

                <Row>
                    <div className='mt-3' style={{ textAlign: 'center' }}>
                        {load ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            : res.error ? "Input Invalid" :
                                res.count === 0 ? 'There is no matched properties' :
                                    res.listings ?
                                        <div>
                                            <h2>Azula AI:</h2>
                                            <Container>
                                                <Row>
                                                    {res.listings.map((property, index) => (
                                                        <Col key={index} className='m-2 d-flex justify-content-center'>
                                                            <DisplayProperty property={property} />
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Container>
                                        </div> : 'There is no matched properties'
                        }
                    </div>
                </Row>
            </Container>

        </>
    )
}

export default AzulaaiPage