import React from 'react'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import VanImageMobile from '../assets/vanMobile.jpg';
import vanImage from '../assets/van.jpg'
import { useNavigate } from 'react-router-dom';

function AskAway() {
    const redirect = useNavigate();
    const clickHanlder = () => {
        redirect('/askaway')
    }

    return (
        <>
            <div style={{ position: 'relative', width: '100%', height: '40rem' }}>
                <Image src={window.innerWidth > 768 ? vanImage : VanImageMobile} style={{ width: '100%', height: '100%' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
                    <Card style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
                        <Card.Body>
                            <h2 style={{ color: 'white' }}>Real Estate Questions? Ask Away To Azula AI</h2>
                            <Button variant='primary' onClick={clickHanlder}
                                style={{ border: 'solid white 4px', borderRadius: '20px' }}>
                                I want to ask...
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default AskAway