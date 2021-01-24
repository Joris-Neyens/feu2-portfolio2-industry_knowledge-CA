import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../images/logo.png"

export default function Nav() {
    return (
        <nav  className="fixed-top">
            <Container>
                <Row>
                        <Col xs="12" md="2" lg="3" className="d-flex flex-column justify-content-center p-0">
                            <p className="logo-text text-center text-md-left p-0">Isidorweb</p>
                        </Col>
                        <Col xs="12" md="8" lg="6" className="justify-content-center py-md-5">
                            <Row>
                                <Col className="text-center p-0"><a href="#home">Home</a></Col>
                                <Col className="text-center p-0"><a href="#work">Portfolio</a></Col>
                                <Col className="text-center p-0"><a href="#about">About</a></Col>
                                <Col className="text-center p-0"><a href="#contact">Contact</a></Col>
                            </Row>
                        </Col>
                </Row>
            </Container>
        </nav>
    )
}
