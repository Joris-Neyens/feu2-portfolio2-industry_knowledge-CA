import React from 'react';
import Postdue from "../../images/postdue.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact() {
    return (
             <section id="contact" className="d-flex align-items-center">
            <Container>
                <div className="text-center pb-5">
                    <h2>Contact</h2>
                </div>
                <Row>
                    <Col className="col-12 col-md-6">
                        <div className=" w-75 w-md-100">
                            <img src={Postdue} className="contact-image" alt="pigeon holding a letter"></img>
                        </div>
                    </Col>
                    <Col><h3 className="pt-5 pt-md-0">Time for an update or a fresh new start?</h3>
                    <a href="mailto: neyens01@gmail.com" className="btn btn-secondary px-0 mt-3">lets chat!</a>
                    </Col>
                </Row>
            </Container>
        </section>
       
    )
}
