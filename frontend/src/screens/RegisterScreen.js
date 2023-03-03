import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { registerUser } from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import Message from "../components/Message";
import Loader from "../components/Loader";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/home";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const registerHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(registerUser(name, email, password));
    }
  };

  return (
    <div>
      <FormContainer
        style={{ backgroundColor: "red", height: "500px", width: "100%" }}
      >
        <h1>Register</h1>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Row style={{ height: "500px", width: "100%" }}>
          <Form onSubmit={registerHandler}>
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
                autoComplete="new-password"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="confirmPassword" className="form-margin">
              <Form.Label>
                <strong>Confirm Password</strong>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                required
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary" className="form-margin">
              {" "}
              Sign Up
            </Button>
          </Form>
        </Row>
      </FormContainer>
    </div>
  );
};

export default RegisterScreen;
