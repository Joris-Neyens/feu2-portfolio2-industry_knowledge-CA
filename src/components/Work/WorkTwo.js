import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import Mobile from "../../images/mobile-mockup2.png";
import Tablet from "../../images/tablet-mockup2.png";
import Pc from "../../images/pc-mockup2.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


export default function WorkTwo() {
    return (
        <section className="d-flex align-items-center">
            <Container>
                <Row>
                <Col xs="12" md="3" lg="3"  className="mt-5">
                <h3 className="mb-0">Homepage</h3>
                        <p>Pure Css &amp; HTML</p>
                    </Col>
                    <Col xs="12" md="9" lg="9" className="p-0">
                    <Carousel className="mx-auto w-100 carousel-fade">
                    <Carousel.Item interval={4000}>
                    <img
                        className="d-block mx-auto"
                        src={Pc}
                        alt="First slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                    <img
     
                        className="d-block mx-auto"
                        src={Mobile}
                        alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                    <img
 
                        className="d-block mx-auto"
                        src={Tablet}
                        alt="Third slide"
                    />
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
            <div className="text-center">
                <a href="/" id="see-more" className="btn btn-secondary px-0 mt-3">See more soon</a>
            </div>
        </Container>
    </section>
    );
}
