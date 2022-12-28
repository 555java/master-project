import {
  POSTS_ADD_POST_START,
  POSTS_ADD_POST_SUCCESS,
  POSTS_ADD_POST_ERROR,
  POSTS_LOAD_POST_START,
  POSTS_LOAD_POST_SUCCESS,
  POSTS_LOAD_POST_ERROR,
} from "./posts.constants";

const initialState = {
  posts: [],
  isPostLoading: false,
  error: null,
};
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_ADD_POST_START:
      return { ...state, isPostLoading: true };
    case POSTS_ADD_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
        isPostLoading: false,
      };
    case POSTS_ADD_POST_ERROR:
      return {
        ...state,
        isPostLoading: false,
      };

    case POSTS_LOAD_POST_START:
      return { ...state, isPostLoading: true };
    case POSTS_LOAD_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
        isPostLoading: false,
      };
    case POSTS_LOAD_POST_ERROR:
      return { ...state, isPostLoading: false, error: action.payload };
    default:
      return state;
  }
};
