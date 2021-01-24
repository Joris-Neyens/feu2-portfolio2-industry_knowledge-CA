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
                    <Col xs={{col: 12, offset: 0}} lg={{col: 11, offset: 1}} className="p-0">
                        <h1>Isidorweb</h1>
                        <h3 className="pb-3">Webdesign and development</h3>
                        <a href="#work" className="btn btn-primary">portfolio</a>
                        <a href="#contact" className="btn btn-secondary px-0 ml-5">contact</a>
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    )
}
