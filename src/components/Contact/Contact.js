import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact() {
    return (
             <section id="contact" className="d-flex align-items-center">
            <Container>
                <Row>
                    <Col>
                        <img width={300} className="mr-3 rounded" src="" alt=""/>
                    </Col>
                    <Col><h2>Time for an update or a fresh new start?</h2>
                    <a href="mailto: neyens01@gmail.com" className="btn btn-secondary px-0 mt-3">lets chat!</a>
                    </Col>
                </Row>
            </Container>
        </section>
       
    )
}
