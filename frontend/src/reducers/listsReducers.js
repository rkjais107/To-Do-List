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
  GET_LIST_ITEM_RESET,
  GET_LIST_ITEM_SUCCESS,
  INDIVIDUAL_LIST_FAIL,
  INDIVIDUAL_LIST_REQUEST,
  INDIVIDUAL_LIST_RESET,
  INDIVIDUAL_LIST_SUCCESS,
  UPDATE_LIST_ITEM_FAIL,
  UPDATE_LIST_ITEM_REQUEST,
  UPDATE_LIST_ITEM_RESET,
  UPDATE_LIST_ITEM_SUCCESS,
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
    case INDIVIDUAL_LIST_RESET:
      return {};
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

export const deleteListItemReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_LIST_ITEM_REQUEST:
      return { loading: true };
    case DELETE_LIST_ITEM_SUCCESS:
      return { loading: false, deleteitemlist: action.payload };
    case DELETE_LIST_ITEM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getListItemReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LIST_ITEM_REQUEST:
      return { loading: true };
    case GET_LIST_ITEM_SUCCESS:
      return { loading: false, getitemlist: action.payload };
    case GET_LIST_ITEM_FAIL:
      return { loading: false, error: action.payload };
    case GET_LIST_ITEM_RESET:
      return {};
    default:
      return state;
  }
};

export const updateListItemReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_LIST_ITEM_REQUEST:
      return { loading: true };
    case UPDATE_LIST_ITEM_SUCCESS:
      return { loading: false, updateitemlist: action.payload };
    case UPDATE_LIST_ITEM_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_LIST_ITEM_RESET:
      return {};
    default:
      return state;
  }
};
