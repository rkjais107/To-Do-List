import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../actions/userActions";
import { INDIVIDUAL_LIST_RESET } from "../constants/listsConstants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    // Dispatch logout
    dispatch(logoutUser());
    navigate("/");
  };

  const resetHandler = () => {
    dispatch({ type: INDIVIDUAL_LIST_RESET });
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        {!userInfo && (
          <LinkContainer to="/">
            <Navbar.Brand onClick={resetHandler}>To-Do List</Navbar.Brand>
          </LinkContainer>
        )}
        {userInfo && (
          <LinkContainer to="/home">
            <Navbar.Brand onClick={resetHandler}>To-Do List</Navbar.Brand>
          </LinkContainer>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="me-auto">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav> */}
          <Nav className="ms-auto">
            {!userInfo && (
              <LinkContainer to="/">
                <Nav.Link>
                  <i className="fa-solid fa-house"></i> Home
                </Nav.Link>
              </LinkContainer>
            )}
            {userInfo && (
              <LinkContainer to="/home">
                <Nav.Link>
                  <i className="fa-solid fa-house"></i> Home
                </Nav.Link>
              </LinkContainer>
            )}

            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
