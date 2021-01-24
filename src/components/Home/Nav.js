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
                                <Col className="text-center"><a href="#home">Home</a></Col>
                                <Col className="text-center"><a href="#work">Portfolio</a></Col>
                                <Col className="text-center"><a href="#about">About</a></Col>
                                <Col className="text-center"><a href="#contact">Contact</a></Col>
                            </Row>
                        </Col>
                </Row>
            </Container>
        </nav>
    )
}
