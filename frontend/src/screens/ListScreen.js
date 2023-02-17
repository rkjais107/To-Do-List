import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIndividualList, postCreateItemList } from "../actions/listsActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const ListScreen = () => {
  const [content, setContent] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [items, setItems] = useState([]);

  const dispatch = useDispatch();
  const params = useParams();
  const paramslistId = params.listId;

  const individualList = useSelector((state) => state.individualList);
  const { loading, error, list } = individualList;

  const createItemList = useSelector((state) => state.createItemList);
  const { createitemlist } = createItemList;

  useEffect(() => {
    if (!list || !list.lists) {
      dispatch(getIndividualList(paramslistId));
    } else {
      setItems(list.lists);
    }
    if (createitemlist) {
      setContent("");
      setTimestamp("");
    }
  }, [dispatch, paramslistId, list, createitemlist]);

  const addItemsHandler = () => {
    dispatch(
      postCreateItemList({
        listId: paramslistId,
        content: content,
        timestamp: timestamp,
      })
    );
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
        <Row style={{ backgroundColor: "green", height: "70%", width: "100%" }}>
          {loading ? (
            <Loader />
          ) : (
            <div>
              {items.map((item) => (
                <p>
                  {item.content} - {item.timestamp}
                </p>
              ))}
            </div>
          )}
        </Row>
        <Row style={{ backgroundColor: "red", height: "15%", width: "100%" }}>
          <div style={{ marginTop: "12px" }}>
            <Form
              style={{ display: "flex", alignItems: "center" }}
              onSubmit={addItemsHandler}
            >
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
                  verticalAlign: "middle",
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
                  verticalAlign: "middle",
                }}
              />
              {content && (
                <Button type="submit" variant="primary">
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
