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
  DELETE_LIST_REQUEST,
  DELETE_LIST_SUCCESS,
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

export const createListReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_LIST_REQUEST:
      return { loading: true };
    case CREATE_LIST_SUCCESS:
      return { loading: false, createlist: action.payload };
    case CREATE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteListReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_LIST_REQUEST:
      return { loading: true };
    case DELETE_LIST_SUCCESS:
      return { loading: false, deletelist: action.payload };
    case DELETE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createItemListReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_LIST_ITEM_REQUEST:
      return { loading: true };
    case CREATE_LIST_ITEM_SUCCESS:
      return { loading: false, createitemlist: action.payload };
    case CREATE_LIST_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
