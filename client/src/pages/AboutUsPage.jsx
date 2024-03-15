import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function AboutUsPage() {
    return (
        <>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Azula AI</h1>

            <Container className='p-5' style={{ backgroundColor: 'black' }}>
                <Row>
                    <h1 style={{ color: 'white', textAlign: 'center' }}>Innovative Real Estate Solutions</h1>
                    <p style={{ color: 'white', textAlign: 'center' }} >
                        Introduce Azula AI as a cutting-edge platform leveraging artificial intelligence to transform the real estate industry, offering comprehensive, efficient, and personalized services.
                    </p>
                </Row>
            </Container>

            <Container className='p-5'>
                <Row>
                    <h1 style={{ color: 'black', textAlign: 'center' }}>Features</h1>
                    <p style={{ color: 'black', textAlign: 'center' }} >
                        Empowering professionals and clients with intuitive, efficient, and secure real estate solutions globally
                    </p>
                </Row>
            </Container >

            <Container className='p-5'>
                <Row>
                    hold on
                </Row>
            </Container >
        </>
    )
}

export default AboutUsPage