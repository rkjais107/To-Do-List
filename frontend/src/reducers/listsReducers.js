import {
  ALL_LISTS_FAIL,
  ALL_LISTS_REQUEST,
  ALL_LISTS_SUCCESS,
} from "../constants/listsConstants";

export const allListsReducer = (state = { lists: [] }, action) => {
  switch (action.type) {
    case ALL_LISTS_REQUEST:
      return { ...state, loading: true };
    case ALL_LISTS_SUCCESS:
      return { loading: false, lists: action.payload };
    case ALL_LISTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
