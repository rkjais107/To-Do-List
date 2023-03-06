import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import Message from "../components/Message";

const LoginScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/home";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <div>
      <FormContainer
        style={{ backgroundColor: "red", height: "500px", width: "100%" }}
      >
        <h1>Login</h1>
        {/* {message && <Message variant="danger">{message}</Message>} */}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Row style={{ height: "500px", width: "100%" }}>
          <Form onSubmit={loginHandler}>
            <Form.Group controlId="email" className="form-margin">
              <Form.Label>
                <strong>Email Address</strong>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="none"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password" className="form-margin">
              <Form.Label>
                <strong>Password</strong>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="none"
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary" className="form-margin">
              {" "}
              Sign In
            </Button>
          </Form>
          <Row className="py-3">
            <Col>
              New User?{" "}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
              >
                Register
              </Link>
            </Col>
          </Row>
        </Row>
      </FormContainer>
    </div>
  );
};

export default LoginScreen;
