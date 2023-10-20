import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { authReducer } from "../features-store/auth/auth.reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { postReducer } from "../features-store/post/post.reducer";
import { postsReducer } from "../features-store/posts/posts.reducer";

export function createAppStore(router) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(router), logger)
  );
  const store = createStore(
    combineReducers({
      auth: authReducer,
      post: postReducer,
      posts: postsReducer,
    }),
    enhancer
  );
  return store;
}
