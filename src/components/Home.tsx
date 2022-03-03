import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
    return (
        <section >
          <Container fluid className="home-section" id="home">
            <Container className="home-content">
              <Row style={{ display: "inline"}}>
                <Col className="home-header">
                  <h1 style={{ paddingBottom: 15 }} className="heading-home">
                    Sharma Tyres
                  </h1>
    
                  <h2 className="heading-name">
                    THE PERFECT CHOICE FOR YOU
                  </h2>
                </Col> 
                
                <Col style={{ paddingBottom: 20 }}>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      );
}

export default Home;
