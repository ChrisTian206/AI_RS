import axios from 'axios'
import { React, useEffect, useState } from 'react'
import { Container, Row, Col, Carousel, Image, Spinner, ListGroup, Placeholder, ListGroupItem } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import House1 from '../assets/houses/house1.jpeg'
import House2 from '../assets/houses/house2.jpeg'
import House3 from '../assets/houses/house3.jpeg'
import House4 from '../assets/houses/house4.jpeg'
import House5 from '../assets/houses/house5.jpeg'
import House6 from '../assets/houses/house6.jpeg'
import House7 from '../assets/houses/house7.jpeg'
import House8 from '../assets/houses/house8.jpeg'

function PropertyPage() {
    const images = [House1, House2, House3, House4, House5, House6, House7, House8]
    const params = useParams()
    // console.log('params: ', params)
    const mlsNumber = params.id ? params.id : ''
    // console.log('mls received from FE: ', mlsNumber)
    const [property, setProperty] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProperty = async () => {
            await axios.post('/listings/getProperty', { mlsNumber })
                .then(res => { setProperty(res.data); console.log(res.data); setLoading(false) })
                .catch(error => console.log(error))
        }
        fetchProperty()
    }, [])

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
                                <div className="shadow p-3 rounded mb-3" style={{ height: '25rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Carousel slide={false} style={{ textAlign: 'center', width: '100%' }}>
                                        {images.map((image, index) => (
                                            <Carousel.Item key={index}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                                    <Image src={image} text="imgs" rounded width='80%' />
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
                            <ListGroup className='mt-5'>
                                <Placeholder as={ListGroupItem} xs={6} />
                                <Placeholder as={ListGroupItem} xs={6} />
                                <Placeholder as={ListGroupItem} xs={6} />
                                <Placeholder as={ListGroupItem} xs={6} />
                                <Placeholder as={ListGroupItem} xs={6} />
                            </ListGroup> :
                            <div>
                                <h2>$CAD:{property.listPrice}</h2>
                                <ListGroup className='mt-5'>
                                    <ListGroup.Item>{Object.keys(property.details.bathrooms).length} Baths / {Object.keys(property.rooms).length} Beds</ListGroup.Item>
                                    <ListGroup.Item>Listed on: {property.listDate}</ListGroup.Item>
                                    <ListGroup.Item>Built on: {property.details.yearBuilt}</ListGroup.Item>
                                    <ListGroup.Item>{property.details.description}</ListGroup.Item>
                                    <ListGroup.Item>Condition: {property.lastStatus}</ListGroup.Item>
                                </ListGroup>
                            </div>
                        }

                    </Col>

                    <Col md={3}>
                        <h3>Agent Info</h3>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default PropertyPage