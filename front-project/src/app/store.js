import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { authReducer } from "../features-store/auth/auth.reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

export const store = createStore(
  combineReducers({ auth: authReducer }),
  enhancer
);
