import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { authReducer } from "../features-store/auth/auth.reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { postsReducer } from "../features-store/posts/posts.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

export const store = createStore(
  combineReducers({ auth: authReducer, posts: postsReducer }),
  enhancer
);
