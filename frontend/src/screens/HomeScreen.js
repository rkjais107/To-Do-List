import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLists, postCreateList } from "../actions/listsActions";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";

const HomeScreen = () => {
  const [listname, setListname] = useState("");
  const [content, setContent] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const dispatch = useDispatch();

  const allLists = useSelector((state) => state.allLists);
  const { loading, error, lists } = allLists;

  const createList = useSelector((state) => state.createList);
  const { loading: createLoading, error: createError, createlist } = createList;

  useEffect(() => {
    dispatch(getAllLists());
  }, [dispatch, createlist]);

  const createListHandler = (e) => {
    e.preventDefault();
    dispatch(postCreateList(listname, content, timestamp));
  };

  return (
    <>
      {error && <Message variant="danger">{error}</Message>}

      <Row
        style={{
          backgroundColor: "blue",
          height: "550px",
          width: "1100px",
          marginLeft: "100px",
        }}
      >
        <Col
          md={6}
          style={{ backgroundColor: "red", height: "100%", width: "60%" }}
        >
          <Col>
            {loading ? (
              <Loader />
            ) : (
              <Container>
                {lists
                  ? lists.map((list) => (
                      <Row>
                        <p style={{ fontSize: "30px" }}>
                          <i class="fa-solid fa-list"></i> {list.listname}{" "}
                          <Link
                            style={{
                              textDecoration: "none",
                              color: "black",
                              fontWeight: "bold",
                            }}
                            to={`/list/${list._id}`}
                          >
                            <i class="fa-solid fa-arrow-right"></i>
                          </Link>
                        </p>
                      </Row>
                    ))
                  : null}
              </Container>
            )}
          </Col>
        </Col>
        <Col
          md={3}
          style={{ backgroundColor: "yellow", height: "100%", width: "40%" }}
        >
          <FormContainer>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={createListHandler}>
              <Form.Group controlId="listname" className="form-margin">
                <Form.Label>
                  <strong>listname</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter listname"
                  value={listname}
                  onChange={(e) => setListname(e.target.value)}
                  autoComplete="none"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="content" className="form-margin">
                <Form.Label>
                  <strong>content</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  autoComplete="none"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="timestamp" className="form-margin">
                <Form.Label>
                  <strong>timestamp</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter timestamp"
                  value={timestamp}
                  onChange={(e) => setTimestamp(e.target.value)}
                  autoComplete="none"
                ></Form.Control>
              </Form.Group>
              <Button type="submit" variant="primary" className="form-margin">
                Add List...
              </Button>
            </Form>
          </FormContainer>
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
