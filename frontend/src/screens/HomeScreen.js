import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLists } from "../actions/listsActions";
import { Col, Container, Nav, Row } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  const dispatch = useDispatch();

  const allLists = useSelector((state) => state.allLists);
  const { loading, error, lists } = allLists;

  useEffect(() => {
    dispatch(getAllLists());
  }, [dispatch]);

  return (
    <>
      <Container>
        {error && <Message variant="danger">{error}</Message>}
        <h1>LISTS SCREEN</h1>
        <Col>
          {loading ? (
            <Loader />
          ) : (
            <Container>
              {lists.map((list) => (
                <Row>
                  <p>
                    {list.listname} -{" "}
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",
                      }}
                      to={`/lists/${list._id}`}
                    >
                      {list._id}
                    </Link>
                  </p>
                </Row>
              ))}
            </Container>
          )}
        </Col>
      </Container>
    </>
  );
};

export default HomeScreen;
