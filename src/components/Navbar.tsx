import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { ImUser, ImPhone } from "react-icons/im";
import {
    AiOutlineHome,
    AiOutlineUser,
} from "react-icons/ai";
import { NavDropdown } from "react-bootstrap";

const NavBar = () => {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    const scrollHandler = () => {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} className="img-fluid logo" alt="brand" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        // updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/login"
                                onClick={() => updateExpanded(false)}
                            >
                                <ImUser style={{ marginBottom: "2px" }} /> Login
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                            </Nav.Link>
                        </Nav.Item>

                        <NavDropdown
                            title="Tyres Stock" id={""}                        >
                            <NavDropdown
                                title="Apollo Tyres Stock"
                                id="dropdown-cust"
                            >
                                <NavDropdown.Item
                                    as={Link}
                                    to="/tyrestock/pcr"
                                    onClick={() => updateExpanded(false)}
                                >
                                    PCR Tubeless
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    as={Link}
                                    to="/tyrestock/truck"
                                    onClick={() => updateExpanded(false)}
                                >
                                    Truck BIAS
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    as={Link}
                                    to="/tyrestock/farm"
                                    onClick={() => updateExpanded(false)}
                                >
                                    Farm
                                </NavDropdown.Item>
                            </NavDropdown>
                        </NavDropdown>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/contact"
                                onClick={() => updateExpanded(false)}
                            >
                                <ImPhone style={{ marginBottom: "2px" }} /> Contact Us
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
