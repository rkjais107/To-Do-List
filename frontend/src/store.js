import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  allListsReducer,
  createItemListReducer,
  createListReducer,
  deleteListItemReducer,
  deleteListReducer,
  getListItemReducer,
  individualListReducer,
  updateListItemReducer,
} from "./reducers/listsReducers";
import { userRegisterReducer } from "./reducers/userReducers";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

const reducer = combineReducers({
  allLists: allListsReducer,
  individualList: individualListReducer,
  createList: createListReducer,
  deleteList: deleteListReducer,
  createItemList: createItemListReducer,
  deleteListItem: deleteListItemReducer,
  getListItem: getListItemReducer,
  updateListItem: updateListItemReducer,
  userRegister: userRegisterReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
