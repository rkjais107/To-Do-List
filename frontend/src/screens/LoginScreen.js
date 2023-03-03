import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../actions/userActions";

const LoginScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <div>
      <h1>Login Screen</h1>
      <Container
        style={{ backgroundColor: "red", height: "500px", width: "100%" }}
      >
        <Row
          style={{ backgroundColor: "yellow", height: "500px", width: "100%" }}
        >
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
        </Row>
      </Container>
    </div>
  );
};

export default LoginScreen;
