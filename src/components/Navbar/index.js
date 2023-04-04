import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import navIcon1 from "../../assets/images/nav-icon1.svg";
import navIcon2 from "../../assets/images/nav-icon2.svg";
import navIcon3 from "../../assets/images/nav-icon3.svg";
import "./navbar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className={scroll ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            <Nav.Link
                href="#connect"
                className={
                  activeLink === "connects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onActiveLink("connects")}
              >
                Contact
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  {" "}
                  <img src={navIcon1} alt="icon" />
                </a>
                <a href="#">
                  {" "}
                  <img src={navIcon2} alt="icon" />
                </a>
                <a href="#">
                  {" "}
                  <img src={navIcon3} alt="icon" />
                </a>
              </div>
              <button
                className="connect-btn"
                onClick={() => console.log("connect")}
              >
                <span>Let's connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
