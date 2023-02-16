import {
  ALL_LISTS_FAIL,
  ALL_LISTS_REQUEST,
  ALL_LISTS_SUCCESS,
  INDIVIDUAL_LIST_FAIL,
  INDIVIDUAL_LIST_REQUEST,
  INDIVIDUAL_LIST_SUCCESS,
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

export const individualListReducer = (state = { list: {} }, action) => {
  switch (action.type) {
    case INDIVIDUAL_LIST_REQUEST:
      return { ...state, loading: true };
    case INDIVIDUAL_LIST_SUCCESS:
      return { loading: false, list: action.payload };
    case INDIVIDUAL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
