import React from 'react';
import Profile from "../../images/profile.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
    return (
        <section id="about" className="d-flex align-items-center">
            <Container>
                <div className="text-center py-5">
                    <h2 className="pt-5 pt-md-0">about</h2>
                </div>
                <Row>
                    <Col className="col-12 col-md-6">
                        <div className="w-100">
                            <img className="mr-3 w-100" src={Profile} alt="Profile pic placeholder"/>
                        </div>
                    </Col>
                    <Col><h3 className="mb-3">Im Joris, a Dutch front-end developer 
                    based in Norway.</h3>
                    <p>After 5 year as trainer, adviser and coach I decided to combine my past 
                        experience in organisational psychology with design and coding. 
                        Building websites and that communicate effectively.</p>

                        <p>When I am not researching, designing and coding I am wrestling with my 
                        two boys or rocking my little girl to sleep so I can use time on my other 
                        hobbies.
                    </p></Col>
                </Row>
            </Container>
        </section>
    )
}
