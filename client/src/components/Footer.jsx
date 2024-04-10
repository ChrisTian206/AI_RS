import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <div className='p-5' style={{ backgroundColor: '#343a40' }}>
                <Row>
                    <Col className='text-center py-3' style={{ color: 'white' }} md={4} >
                        Azula AI&copy; 2024
                    </Col>
                    <Col className='text-center py-3' style={{ color: 'white' }} md={4} >
                        Azula AI&copy; 2024
                    </Col>
                    <Col className='text-center py-3' style={{ color: 'white' }} md={4} >
                        Azula AI&copy; 2024
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Footer