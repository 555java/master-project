import {
  POST_ADD_POST_ERROR,
  POST_ADD_POST_START,
  POST_ADD_POST_SUCCESS,
  POST_LOAD_POST_ERROR,
  POST_LOAD_POST_START,
  POST_LOAD_POST_SUCCESS,
} from "./post.constants";

export const addPostStart = () => {
  return { type: POST_ADD_POST_START };
};

export const addPostSuccess = (post) => {
  return { type: POST_ADD_POST_SUCCESS, payload: post };
};

export const addPostError = () => {
  return { type: POST_ADD_POST_ERROR };
};

export const loadPostStart = () => {
  return { type: POST_LOAD_POST_START };
};
export const loadPostError = (error) => {
  return { type: POST_LOAD_POST_ERROR, payload: error };
};
export const loadPostSuccess = (post) => {
  return { type: POST_LOAD_POST_SUCCESS, payload: post };
};
