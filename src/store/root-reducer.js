import { combineReducers } from "redux";
import {searchFieldReducer} from "./searchField.reducer";
import {robotsReducer} from "./robots.reducer";

export const rootReducer = combineReducers({
  searchField: searchFieldReducer,
  robots: robotsReducer,
})