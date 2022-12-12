import {
  POSTS_ADD_POST_START,
  POSTS_ADD_POST_SUCCESS,
} from "./posts.constants";

const initialState = {
  posts: [],
  isPostLoading: false,
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
    default:
      return state;
  }
};
