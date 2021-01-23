import React from 'react';
import Profile from "../../images/profile.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
    return (
        <section className="d-flex align-items-center">
            <Container>
                <Row>
                    <Col>
                        <img width={500} className="mr-3 rounded" src={Profile} alt="Profile pic placeholder"/>
                    </Col>
                    <Col><h2>Im Joris, a Dutch front-end developer 
                    based in Norway.</h2>
                    <p>After 5 year as trainer, adviser and coach I decided to combine my past 
                        experience in organisational psychology with design and coding. 
                        Building websites and that communicate effectively.

                        When I am not researching, designing and coding I am wrestling with my 
                        two boys or rocking my little girl to sleep so I can use time on my other 
                        hobbies.
                    </p></Col>
                </Row>
            </Container>
        </section>
    )
}
