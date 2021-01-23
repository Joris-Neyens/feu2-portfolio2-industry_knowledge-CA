import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import Mobile from "../../images/mobile-mockup2.png";
import Tablet from "../../images/tablet-mockup2.png";
import Pc from "../../images/pc-mockup2.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function WorkTwo() {
    return (
        <section>
            <Container className="work-text position-absolute mt-5">
                <Row>
                    <Col lg="12, offset-1">                      
                        <h2>Homepage Science Museum</h2>
                        <p>Pure Css &amp; HTML</p>
                    </Col>
                </Row>
            </Container>
            <Carousel className="mx-auto w-75 carousel-fade  ">
                <Carousel.Item interval={1000}>
                    <img width={700} className="d-block mx-auto" src={Pc} alt="First slide"/>
                    <Carousel.Caption>
                        <Button variant="secondary" className="mx-auto">See more</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img width={700} className="d-block mx-auto" src={Mobile} alt="Third slide"/>
                    <Carousel.Caption>
                        <Button variant="secondary" className="mx-auto">See more</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img width={700} className="d-block mx-auto" src={Tablet} alt="Third slide"/>
                    <Carousel.Caption>
                        <Button variant="secondary" className="mx-auto">See more</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    </section>
    );
}
