import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const HomeScreen = () => {
  const [content, setContent] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const postSubmitHandler = () => {
    console.log("Comment Added!");
  };
  return (
    <>
      <h1>LISTSCREEN</h1>
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
                placeholder="Add..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{
                  width: "30%",
                  padding: "12px 20px",
                  borderRadius: "10px",
                  marginRight: "5px",
                }}
              />
              <input
                type="text"
                placeholder="Add a timestamp..."
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
                style={{
                  width: "30%",
                  padding: "12px 20px",
                  borderRadius: "10px",
                  marginRight: "5px",
                }}
              />
              {content && (
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
