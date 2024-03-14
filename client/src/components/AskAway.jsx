import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'



function AskAway() {
    const clickHanlder = () => {

    }

    return (
        <Card
            border='light'
            style={{ width: '100%', height: '20rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            className='text-center align-items-center'>
            <Card.Body>
                <Card.Img></Card.Img>
                <Card.Title>Ask away to Azula AI</Card.Title>
                <Button variant='primary' onClick={clickHanlder}>I want to ask...</Button>
            </Card.Body>
        </Card>
    )
}

export default AskAway