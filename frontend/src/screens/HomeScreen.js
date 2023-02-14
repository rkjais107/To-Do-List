import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const HomeScreen = () => {
  const [comment, setComment] = useState("");
  const postSubmitHandler = () => {
    console.log("Comment Added!");
  };
  return (
    <>
      <h1>HomeScreen</h1>
      <Container
        style={{ backgroundColor: "blue", height: "500px", width: "100%" }}
      >
        <Row
          style={{ backgroundColor: "violet", height: "15%", width: "100%" }}
        ></Row>
        <Row
          style={{ backgroundColor: "green", height: "70%", width: "100%" }}
        ></Row>
        <Row style={{ backgroundColor: "red", height: "15%", width: "100%" }}>
          <div style={{ marginTop: "12px" }}>
            <Form onSubmit={postSubmitHandler}>
              <input
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{
                  width: "80%",
                  padding: "12px 20px",
                  borderRadius: "10px",
                  marginRight: "5px",
                }}
              />
              {comment && (
                <Button type="submit" variant="primary" className="form-margin">
                  Post
                </Button>
              )}
            </Form>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
