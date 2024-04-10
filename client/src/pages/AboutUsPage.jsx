import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function AboutUsPage() {
    return (
        <>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Azula AI</h1>

            <Container className='p-5' style={{ backgroundColor: '#343a40' }}>
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

            <Container className='p-5' style={{ backgroundColor: '#343a40' }} >
                <Row>
                    <h1 style={{ color: 'white', textAlign: 'center' }}>Team</h1>
                    <Col md={8} style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                        Member 1
                    </Col>
                    <Col md={4} style={{ color: 'white', textAlign: 'center' }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur in reprehenderit doloribus repellat, rem quae doloremque! Sit, quo beatae quos expedita quod, quas sequi molestiae molestias officiis veniam ex!
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col md={8} style={{ color: 'white', textAlign: 'center' }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur in reprehenderit doloribus repellat, rem quae doloremque! Sit, quo beatae quos expedita quod, quas sequi molestiae molestias officiis veniam ex!
                    </Col>
                    <Col md={4} style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                        Member 2
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col md={8} style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                        Member 3
                    </Col>
                    <Col md={4} style={{ color: 'white', textAlign: 'center' }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur in reprehenderit doloribus repellat, rem quae doloremque! Sit, quo beatae quos expedita quod, quas sequi molestiae molestias officiis veniam ex!
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default AboutUsPage