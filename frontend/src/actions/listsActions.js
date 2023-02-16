import {
  ALL_LISTS_FAIL,
  ALL_LISTS_REQUEST,
  ALL_LISTS_SUCCESS,
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
