import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
    return (
        <Container fluid className="home-section">
          <Container>
            <Row style={{ justifyContent: "bottom", padding: "150px" }}>
              <Col>
                <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                  Login Page //TODO: create login page
                </h2>
              </Col>
            </Row>
          </Container>
        </Container>
      );
}

export default Login;
