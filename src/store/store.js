import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from "./root-reducer";

const middleware = [thunkMiddleware]

if(process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))