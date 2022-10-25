import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { authReducer } from "../features-store/auth/auth.reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(
  combineReducers({ auth: authReducer }),
  enhancer
);
