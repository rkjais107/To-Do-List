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
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
