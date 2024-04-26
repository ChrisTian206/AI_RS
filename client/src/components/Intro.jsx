import React from 'react'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'

function Intro() {
    return (
        <Container className='my-5'>
            <Row className='text-center'>
                <h1>Vision</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto velit possimus tempore, vero quaerat consequatur dolore, ullam accusantium maxime nisi unde. Nihil autem dignissimos fugiat alias, exercitationem voluptas quasi?</p>
            </Row>
            <Row className='text-center'>
                <h1>Mission</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto velit possimus tempore, vero quaerat consequatur dolore, ullam accusantium maxime nisi unde. Nihil autem dignissimos fugiat alias, exercitationem voluptas quasi?</p>
            </Row>
            <Row className='text-center'>
                <h1>Value</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae architecto velit possimus tempore, vero quaerat consequatur dolore, ullam accusantium maxime nisi unde. Nihil autem dignissimos fugiat alias, exercitationem voluptas quasi?</p>
            </Row>
        </Container>
    )
}

export default Intro