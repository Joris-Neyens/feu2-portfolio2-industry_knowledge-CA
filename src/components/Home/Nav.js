import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Nav() {
    return (
        <nav>
            <Container>
                <Row>
                        <Col xs="12" md="2" lg="3"></Col>
                        <Col xs="12" md="8" lg="6" className="justify-content-center py-5">
                            <Row>
                                <Col className="text-center">Work</Col>
                                <Col className="text-center">About</Col>
                                <Col className="text-center">Contact</Col>
                            </Row>
                        </Col>
                </Row>
            </Container>
        </nav>
    )
}
