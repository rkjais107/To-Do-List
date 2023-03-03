import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userActions";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password));
  };

  return (
    <div>
      <h1>Register Screen</h1>
      <Container
        style={{ backgroundColor: "red", height: "500px", width: "100%" }}
      >
        <Row
          style={{ backgroundColor: "yellow", height: "500px", width: "100%" }}
        >
          <Form onSubmit={loginHandler}>
            <Form.Group controlId="name" className="form-margin">
              <Form.Label>
                <strong>Name</strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="none"
              ></Form.Control>
            </Form.Group>
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
              Sign Up
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterScreen;
