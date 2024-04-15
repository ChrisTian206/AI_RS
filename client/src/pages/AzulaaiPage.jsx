import React, { useState } from 'react'
import { Form, InputGroup, Container, Row, Col, Button, Spinner } from 'react-bootstrap'
import axios from 'axios';
import Listing from '../components/Listing';
import DisplayProperty from '../components/DisplayProperty';

"https://ai-rs.onrender.com/api/ai/talk/"
"http://localhost:8000/api/ai/talk"

function AzulaaiPage() {
    const [res, setRes] = useState('')
    const [question, setQuestion] = useState('')
    const [load, setLoad] = useState(false)

    const submitHandler = async () => {
        console.log("question: ", question)
        setLoad(true)

        const data = await axios.post(`/ai/talk`, { question })
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
                <Form onSubmit={submitHandler}>
                    <InputGroup style={{ border: 'solid black 2px', borderRadius: '20px' }}>
                        <Form.Control
                            as="textarea"
                            aria-label="With textarea"
                            style={{ background: 'white', borderRadius: '20px' }}
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
                                res.count === 0 ? 'There is 0 matched properties' :
                                    res.listings ?
                                        <div>
                                            <h2>Azula AI:</h2>
                                            <Container>
                                                <Row>
                                                    {res.listings.map((property) => (
                                                        <Col key={property.mlsNumber} className='m-2 d-flex justify-content-center'>
                                                            <DisplayProperty property={property} />
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Container>
                                        </div> : ''
                        }
                    </div>
                </Row>
            </Container>

        </>
    )
}

export default AzulaaiPage