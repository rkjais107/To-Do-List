import {
  ALL_LISTS_FAIL,
  ALL_LISTS_REQUEST,
  ALL_LISTS_SUCCESS,
  CREATE_LIST_FAIL,
  CREATE_LIST_ITEM_FAIL,
  CREATE_LIST_ITEM_REQUEST,
  CREATE_LIST_ITEM_SUCCESS,
  CREATE_LIST_REQUEST,
  CREATE_LIST_SUCCESS,
  DELETE_LIST_FAIL,
  DELETE_LIST_ITEM_FAIL,
  DELETE_LIST_ITEM_REQUEST,
  DELETE_LIST_ITEM_SUCCESS,
  DELETE_LIST_REQUEST,
  DELETE_LIST_SUCCESS,
  GET_LIST_ITEM_FAIL,
  GET_LIST_ITEM_REQUEST,
  GET_LIST_ITEM_SUCCESS,
  INDIVIDUAL_LIST_FAIL,
  INDIVIDUAL_LIST_REQUEST,
  INDIVIDUAL_LIST_SUCCESS,
  UPDATE_LIST_ITEM_FAIL,
  UPDATE_LIST_ITEM_REQUEST,
  UPDATE_LIST_ITEM_SUCCESS,
} from "../constants/listsConstants";
import axios from "axios";

export const getAllLists = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ALL_LISTS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get("/api/list", config);
    dispatch({
      type: ALL_LISTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_LISTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getIndividualList = (listId) => async (dispatch, getState) => {
  try {
    dispatch({ type: INDIVIDUAL_LIST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/list/${listId}`, config); //backend route
    dispatch({
      type: INDIVIDUAL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INDIVIDUAL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postCreateList = (listname, content, timestamp) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: CREATE_LIST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/list`,
      { listname, content, timestamp },
      config
    ); //backend route
    dispatch({
      type: CREATE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const delDeleteList = (listId) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_LIST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.delete(`/api/list/${listId}`, config); //backend route
    dispatch({
      type: DELETE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postCreateItemList = ({ listId, content, timestamp }) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: CREATE_LIST_ITEM_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/list/${listId}`,
      { content, timestamp },
      config
    ); //backend route
    dispatch({
      type: CREATE_LIST_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_LIST_ITEM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const delDeleteItemList = ({ listId, itemId }) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: DELETE_LIST_ITEM_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.delete(
      `/api/list/${listId}/edit/${itemId}`,
      config
    ); //backend route
    dispatch({
      type: DELETE_LIST_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_LIST_ITEM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getGetItemList = ({ listId, itemId }) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: GET_LIST_ITEM_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `/api/list/${listId}/edit/${itemId}`,
      config
    ); //backend route
    dispatch({
      type: GET_LIST_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LIST_ITEM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateItemList = ({
  listId,
  itemId,
  content,
  timestamp,
}) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_LIST_ITEM_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/api/list/${listId}/edit/${itemId}`,
      { content: content, timestamp: timestamp },
      config
    ); //backend route
    dispatch({
      type: UPDATE_LIST_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_LIST_ITEM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
