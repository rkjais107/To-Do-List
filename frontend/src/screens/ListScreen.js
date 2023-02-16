import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIndividualList } from "../actions/listsActions";
import Message from "../components/Message";

const ListScreen = () => {
  const [content, setContent] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const paramslistId = params.listId;

  const individualList = useSelector((state) => state.individualList);
  const { loading, error, list } = individualList;

  useEffect(() => {
    dispatch(getIndividualList(paramslistId));
  }, [dispatch, paramslistId]);

  const postSubmitHandler = () => {
    console.log("Comment Added!");
  };

  return (
    <>
      <h1>LISTSCREEN</h1>
      {error && <Message variant="danger">{error}</Message>}
      <Container
        style={{ backgroundColor: "blue", height: "500px", width: "100%" }}
      >
        <Row
          style={{ backgroundColor: "violet", height: "15%", width: "100%" }}
        >
          <h2>{list.listname}</h2>
        </Row>
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

export default ListScreen;
