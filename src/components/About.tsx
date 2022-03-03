import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
    return (
        <Container fluid className="home-section">
        <Container>
          <Row style={{ justifyContent: "bottom", padding: "150px" }}>
            <Col>
              <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              ABOUT US //TODO add about us
              </h2>
            </Col>
          </Row>
        </Container>
        </Container>
      );
}

export default About;
