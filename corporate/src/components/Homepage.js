import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar
      style={{ backgroundColor: "transparent" }}
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#" style={{ marginLeft: 0, fontSize: "24px" }}>
          <img
            src="https://marketplace.canva.com/EAFL5B4IZ9E/1/0/1600w/canva-white-and-blue-elegant-company-desktop-wallpaper-V_S9FqQl0P8.jpg"
            alt="Logo"
            height="30"
            width="30"
            style={{ margin: "20px" }}
          />
          Waldiere Inc.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav
            className="me-auto my-2 my-lg-0 mx-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              style={{ fontSize: "18px", marginLeft: "10px" }}
            >
              Solutions
            </Nav.Link>
            <Nav.Link
              href="#action2"
              style={{ fontSize: "18px", marginLeft: "10px" }}
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              href="#action3"
              style={{ fontSize: "18px", marginLeft: "10px" }}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="light" style={{ fontSize: "20px" }}>
          Signup{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path d="M11.5 8a.5.5 0 0 1-.473.5H2V7h9.027a.5.5 0 0 1 .473.5z" />
            <path d="M7.854 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.793 8 7.854 1.646a.5.5 0 0 1 0-.708z" />
          </svg>
        </Button>
      </Container>
    </Navbar>
  );
}

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/originals/37/04/6a/37046a3992d2de0df81ae6b1082a6eb8.jpg")',
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <NavBar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: "150px",
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: "70px",
              fontFamily: "Georgia",
              marginBottom: "35px",
            }}
          >
            where ideas become <br />
            more tangible.
          </p>

          <Button variant="light" style={{ fontSize: "20px" }}>
            Learn More{"    "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.5 8a.5.5 0 0 1-.473.5H2V7h9.027a.5.5 0 0 1 .473.5z"
              />
              <path
                fillRule="evenodd"
                d="M7.854 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.793 8 7.854 1.646a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
