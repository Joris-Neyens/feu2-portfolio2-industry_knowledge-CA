import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import Mobile from "../../images/mobile-mockup3.png";
import Tablet from "../../images/tablet-mockup3.png";
import Pc from "../../images/pc-mockup3.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function WorkOne() {
    return (
      <section className="d-flex align-items-center">
        <Container >
     
          <Row>
                <Col xs="12" md="3" lg="3"  className="p-0">
                <h1 class="mt-5">Work</h1>
        <h2>Online shop</h2>
                
                <p>Vanilla JS</p>
                <p>Bootstrap</p>
                <p>Strapi API</p>
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
        </Container>
      </section>
    );
}
