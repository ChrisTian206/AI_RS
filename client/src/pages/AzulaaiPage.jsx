import React, { useEffect, useState } from 'react'
import { Form, InputGroup, Container, Row, Col, Button, Spinner } from 'react-bootstrap'
import axios from 'axios';
import DisplayProperty from '../components/DisplayProperty';

function AzulaaiPage() {
    const [res, setRes] = useState('')
    const [question, setQuestion] = useState('')
    const [load, setLoad] = useState(false)

    useEffect(() => {
        const listings = localStorage.getItem('listings')
        if (listings) {
            const listingsObj = JSON.parse(listings)
            const listingTime = listingsObj.timeStamp

            const liveTime = 20000 // 20s in ms
            const currentTime = new Date().getTime()
            console.log("useEffect running")
            if (currentTime - listingTime >= liveTime) {
                localStorage.removeItem('listings')
            } else {
                console.log("setting the res to listings")
                setRes(listings)
            }
        }
    }, [])

    const submitHandler = async () => {
        console.log("question: ", question)
        setLoad(true)

        const data = await axios.post(`/ai/talk`, { question })
            .then((res) => {
                setLoad(false)
                return res.data
            })
        setRes(data)
        const listingsWithTimeStamp = structuredClone(data)
        listingsWithTimeStamp.timeStamp = new Date().getTime()
        localStorage.setItem('listings', JSON.stringify(listingsWithTimeStamp))

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


                    <div className="d-flex justify-content-center mt-2" >
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
                                        </div> : <div style={{ height: '25rem' }}></div>
                        }
                    </div>
                </Row>
            </Container>

        </>
    )
}

export default AzulaaiPage