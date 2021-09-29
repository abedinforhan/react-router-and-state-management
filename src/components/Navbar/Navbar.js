import React from "react";
import {
    Container, Nav,
    Navbar as Appbar,
    Stack
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Appbar bg="light" expand="lg">
      <Container fluid>
        <Appbar.Brand href="#"> Employee Manager</Appbar.Brand>
        <Appbar.Toggle aria-controls="navbarScroll" />
        <Appbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Stack direction="horizontal" gap={5}>
              <NavLink
                to="/home"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/employee"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Employee
              </NavLink>
            </Stack>
          </Nav>
         
        </Appbar.Collapse>
      </Container>
    </Appbar>
  );
};

export default Navbar;
