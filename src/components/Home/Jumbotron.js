import React from 'react'
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
    return (
        <Container id="container-jumbotron">
            <Jumbotron  className="d-flex align-items-center m-0 pt-0 w-100">
                <Row>
                    <Col xs={{col: 12, offset: 0}} lg={{col: 11, offset: 1}} className="text-center text-md-left p-0">
                        <h1>Isidorweb</h1>
                        <h3 className="pb-3">Webdesign and development</h3>
                        <Row>
                            <Col className="col-12 col-md-3 col-lg-2">
                                <a href="#work" className="btn btn-primary">portfolio</a>
                            </Col>
                            <Col className="col-12 col-md-2">
                                <a href="#contact" id="contact-button" className="btn btn-secondary px-0 ml-md-5">contact</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    )
}
