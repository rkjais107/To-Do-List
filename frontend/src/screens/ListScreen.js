import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  delDeleteItemList,
  getGetItemList,
  getIndividualList,
  postCreateItemList,
  updateItemList,
} from "../actions/listsActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  INDIVIDUAL_LIST_RESET,
  UPDATE_LIST_ITEM_RESET,
} from "../constants/listsConstants";

const ListScreen = () => {
  const [itemIdUpdate, setItemIdUpdate] = useState("");
  const [listname, setListname] = useState("");
  const [content, setContent] = useState("");
  const [updatebutton, setUpdatebutton] = useState(false);
  const [timestamp, setTimestamp] = useState("");
  const [items, setItems] = useState([]);

  const dispatch = useDispatch();
  const params = useParams();
  const paramslistId = params.listId;

  const individualList = useSelector((state) => state.individualList);
  const { loading, error, list } = individualList;

  const createItemList = useSelector((state) => state.createItemList);
  const { createitemlist } = createItemList;

  const deleteListItem = useSelector((state) => state.deleteListItem);
  const { loading: loadingdeletelist, deleteitemlist } = deleteListItem;

  const getListItem = useSelector((state) => state.getListItem);
  const { loading: loadinggetlistitem, getitemlist } = getListItem;

  const updateListItem = useSelector((state) => state.updateListItem);
  const { loading: loadingupdateitemlist, updateitemlist } = updateListItem;

  useEffect(() => {
    if (
      !list ||
      !list.lists ||
      loadingdeletelist ||
      loadinggetlistitem ||
      loadingupdateitemlist
    ) {
      dispatch(getIndividualList(paramslistId));
    } else {
      setItems(list.lists);
      setListname(list.listname);
    }
    if (createitemlist || updateitemlist) {
      setContent("");
      setTimestamp("");
    }
    if (getitemlist) {
      setContent(getitemlist.content);
      setTimestamp(getitemlist.timestamp);
      setUpdatebutton(true);
    }
  }, [
    dispatch,
    paramslistId,
    list,
    createitemlist,
    deleteitemlist,
    loadingdeletelist,
    loadinggetlistitem,
    getitemlist,
    loadingupdateitemlist,
    updateitemlist,
  ]);

  const addItemsHandler = () => {
    if (updatebutton) {
      console.log("data edited");
      // dispatch
      dispatch(
        updateItemList({
          listId: paramslistId,
          itemId: itemIdUpdate,
          content: content,
          timestamp: timestamp,
        })
      );
      setUpdatebutton(false);
      setContent("");
      setTimestamp("");
      setItemIdUpdate("");
      dispatch({ type: UPDATE_LIST_ITEM_RESET });
    } else {
      dispatch(
        postCreateItemList({
          listId: paramslistId,
          content: content,
          timestamp: timestamp,
        })
      );
    }
  };
  const deleteItemHandler = (itemId) => {
    dispatch(
      delDeleteItemList({
        listId: paramslistId,
        itemId: itemId,
      })
    );
  };
  const editItemHandler = (itemId) => {
    setItemIdUpdate(itemId);
    dispatch(
      getGetItemList({
        listId: paramslistId,
        itemId: itemId,
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
          <h2>{loading ? <Loader /> : listname}</h2>
        </Row>
        <Row style={{ backgroundColor: "green", height: "70%", width: "100%" }}>
          {loading ? (
            <Loader />
          ) : (
            <div>
              {items.map((item) => (
                <h5>
                  {item.content} - {item.timestamp}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                    class="fa-solid fa-pen-to-square"
                    onClick={() => editItemHandler(item._id)}
                  ></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                    class="fa-regular fa-trash-can"
                    onClick={() => deleteItemHandler(item._id)}
                  ></i>
                </h5>
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
              {content && !updatebutton && (
                <Button type="submit" variant="primary">
                  Post
                </Button>
              )}
              {updatebutton && (
                <Button type="submit" variant="primary">
                  Update
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
