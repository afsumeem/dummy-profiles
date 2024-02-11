import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink
            to="/"
            className="fw-bold text-decoration-none text-dark fs-4"
          >
            <span style={{ color: "rgb(242, 50, 203)" }}>D</span>ummy{" "}
            <span style={{ color: "rgb(242, 50, 203)" }}>P</span>rofiles
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="text-decoration-none fs-6 text-dark mx-2">
                Home
              </Link>
              <Link
                to="/adduser"
                className="text-decoration-none fs-6 mx-2 text-dark"
              >
                Add User
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
