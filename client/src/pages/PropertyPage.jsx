import axios from 'axios'
import { React, useEffect, useState } from 'react'
import {
    Container, Row, Col, Carousel, Image, Spinner, ListGroup,
    Button, Modal, InputGroup, Form, Offcanvas
} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import AgentCard from '../components/AgentCard'

import Interior1 from '../assets/interior/interior1.jpg';
import Interior2 from '../assets/interior/interior2.jpg';
import Interior3 from '../assets/interior/interior3.jpg';
import Interior4 from '../assets/interior/interior4.jpg';
import Interior5 from '../assets/interior/interior5.jpg';
import Interior6 from '../assets/interior/interior6.jpg';
import Interior7 from '../assets/interior/interior7.jpg';
import Interior8 from '../assets/interior/interior8.jpg';
import Interior9 from '../assets/interior/interior9.jpg';
import Interior10 from '../assets/interior/interior10.jpg';


function PropertyPage() {
    const images = [Interior1, Interior2, Interior3, Interior4, Interior5, Interior6, Interior7, Interior8, Interior9, Interior10]
    const params = useParams()
    // console.log('params: ', params)
    const mlsNumber = params.id ? params.id : ''
    // console.log('mls received from FE: ', mlsNumber)
    const [property, setProperty] = useState('')
    const [loading, setLoading] = useState(true)
    const [question, setQuestion] = useState('')

    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);

    useEffect(() => {
        const fetchProperty = async () => {
            await axios.post('/listings/getProperty', { mlsNumber })
                .then(res => {
                    setProperty(res.data)
                    console.log(res.data)
                    setLoading(false)
                })
                .catch(error => console.log(error))
        }
        fetchProperty()
    }, [])

    const clickAIHandler = async () => {
        await axios.post('/ai/askQuestions', { question, property })
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={6}>
                        {loading ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner> :
                            <div>
                                <h2>{property.address.streetNumber} {property.address.streetName} {property.address.streetSuffix}, {property.address.city}</h2>
                                <p> mlsNumber:{property.mlsNumber} Status:<span style={{ border: 'solid green 3px', borderRadius: '30px', color: 'white', background: 'green', textAlign: 'center', width: '50px' }}>{property.type}</span></p>
                                <div className="shadow p-3 rounded mb-3"
                                    style={{
                                        height: '25rem', width: '100%', display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', background: '#e9ecef'
                                    }}>
                                    <Carousel slide={false} style={{ textAlign: 'center', width: '100%' }}>
                                        {images.map((image, index) => (
                                            <Carousel.Item key={index}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90%' }}>
                                                    <Image src={image} text="imgs" rounded
                                                        style={{ maxWidth: '100%', maxHeight: '24rem', objectFit: 'contain' }} />
                                                </div>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>

                            </div>
                        }

                    </Col>

                    <Col md={3}>
                        <h3>List Info</h3>
                        {loading ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner> :
                            <div>
                                <h2>$:{property.listPrice}</h2>
                                <ListGroup className='mt-5'>
                                    <ListGroup.Item>{Object.keys(property.details.bathrooms).length} Baths / {Object.keys(property.rooms).length} Beds</ListGroup.Item>
                                    <ListGroup.Item>Listed on: {property.listDate}</ListGroup.Item>
                                    <ListGroup.Item>Built in: {property.details.yearBuilt}</ListGroup.Item>
                                    <ListGroup.Item>Condition: {property.lastStatus}</ListGroup.Item>
                                    <ListGroup.Item>{property.details.sqft} Sqft</ListGroup.Item>
                                    <ListGroup.Item style={{ textAlign: 'center' }}> <Button variant="outline-info" onClick={handleShow}>Full Description</Button></ListGroup.Item>
                                </ListGroup>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Property Details</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>{property.details.description}</Modal.Body>
                                </Modal>
                            </div>
                        }

                    </Col>

                    <Col md={3}>
                        <h3>Agent Info</h3>
                        {loading ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner> :
                            <AgentCard agents={property.agents} />
                        }

                    </Col>
                </Row>

                <Image src='https://static.wixstatic.com/media/b1603e_c62e5b2318cf43069ed64183b4bada34~mv2.webp' roundedCircle
                    style={{ position: 'fixed', bottom: '80px', height: '80px', width: '80px', right: '30px', cursor: 'pointer' }}
                    onClick={handleShow2} />

                <Offcanvas show={show2} onHide={handleClose2} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Azula Q&A</Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body style={{ textAlign: 'center' }}>
                        I can answer your questions about this property
                    </Offcanvas.Body>

                    <Form className='d-flex justify-content-center'>
                        <InputGroup style={{
                            border: 'solid black 2px', borderTopLeftRadius: '20px',
                            borderBottomLeftRadius: '20px', marginBottom: '20px', marginLeft: '10px'
                        }}>
                            <Form.Control
                                as="textarea"
                                aria-label="With textarea"
                                style={{ background: 'white', borderRadius: '20px', maxHeight: '4rem' }}
                                value={question}
                                onChange={(e) => { setQuestion(e.target.value) }} />
                        </InputGroup>
                        <Button variant='dark' style={{ marginBottom: '20px', marginRight: '10px' }} onClick={clickAIHandler}>Submit</Button>
                    </Form>
                </Offcanvas>
            </Container >
        </>
    )
}

export default PropertyPage