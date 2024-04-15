import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import avatar from '../assets/user.png'


function AgentCard({ agents }) {
    return (
        <>
            <Container fluid>
                {agents.map((agent, index) => {
                    return (
                        <div key={index} className='shadow-sm p-1 rounded'>
                            <Row>
                                <Col md={3} xs={3} className="d-flex justify-content-center align-items-center">
                                    <Image src={avatar} text={agent.name} width='100%' fluid style={{ maxWidth: '100%', maxHeight: '100%' }} />
                                </Col>
                                <Col md={9} xs={3}>
                                    <p style={{ fontWeight: 'bold' }}>{agent.name}</p>
                                    <p>NMLS: #{agent.agentId}</p>
                                </Col>
                            </Row>
                        </div>
                    )
                })}
            </Container>
        </>
    )
}

export default AgentCard