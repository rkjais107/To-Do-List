import React from "react";
import { Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const RootScreen = () => {
  return (
    <>
      <Container>
        <h1>Welcome, To the PostGeek</h1>
        <div className="containerRoot">
          <p>
            My website is a platform for sharing information, thoughts, and
            experiences. Whether you're interested in travel, technology, or
            just want to read interesting articles, you'll find something here
            that you'll love.
          </p>
          <LinkContainer to="/login">
            <Button variant="primary" className="form-margin">
              Explore Now
            </Button>
          </LinkContainer>
        </div>
      </Container>
    </>
  );
};

export default RootScreen;
