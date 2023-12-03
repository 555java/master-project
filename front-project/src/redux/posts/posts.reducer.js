import {
  POSTS_LOAD_USER_POSTS_START,
  POSTS_LOAD_USER_POSTS_SUCCESS,
  POSTS_LOAD_USER_POSTS_ERROR,
} from "./posts.constants";

const initialState = {
  browsedUser: null,
  isPostsLoading: true,
  posts: [],
  postsError: false,
};
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_LOAD_USER_POSTS_START:
      return {
        ...state,
        isPostsLoading: true,
        postsError: null,
        browsedUser: null,
      };
    case POSTS_LOAD_USER_POSTS_SUCCESS:
      return {
        ...state,
        browsedUser: {
          username: action.payload.username,
          email: action.payload.email,
          _id: action.payload._id,
        },
        posts: action.payload.posts,
        isPostsLoading: false,
      };
    case POSTS_LOAD_USER_POSTS_ERROR:
      return { ...state, isPostsLoading: false, postsError: action.payload };

    default:
      return state;
  }
};
