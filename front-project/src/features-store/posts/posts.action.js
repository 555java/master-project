import {
  POSTS_LOAD_USER_POSTS_ERROR,
  POSTS_LOAD_USER_POSTS_START,
  POSTS_LOAD_USER_POSTS_SUCCESS,
} from "./posts.constants";

export const loadUserPostsStart = () => {
  return { type: POSTS_LOAD_USER_POSTS_START };
};
export const loadUserPostsError = (error) => {
  return { type: POSTS_LOAD_USER_POSTS_ERROR, payload: error };
};
export const loadUserPostsSuccess = (userPosts) => {
  return { type: POSTS_LOAD_USER_POSTS_SUCCESS, payload: userPosts };
};
