import {
  POSTS_ADD_POST_ERROR,
  POSTS_ADD_POST_START,
  POSTS_ADD_POST_SUCCESS,
  POSTS_LOAD_POST_ERROR,
  POSTS_LOAD_POST_START,
  POSTS_LOAD_POST_SUCCESS,
} from "./posts.constants";

export const addPostStart = () => {
  return { type: POSTS_ADD_POST_START };
};

export const addPostSuccess = (post) => {
  return { type: POSTS_ADD_POST_SUCCESS, payload: post };
};

export const addPostError = () => {
  return { type: POSTS_ADD_POST_ERROR };
};

export const loadPostStart = () => {
  return { type: POSTS_LOAD_POST_START };
};
export const loadPostError = (error) => {
  return { type: POSTS_LOAD_POST_ERROR, payload: error };
};
export const loadPostSuccess = (post) => {
  return { type: POSTS_LOAD_POST_SUCCESS, payload: post };
};
