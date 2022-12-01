import {
  POSTS_ADD_POST_START,
  POSTS_ADD_POST_SUCCESS,
} from "./posts.constants";

export const addPostStart = () => {
  return { type: POSTS_ADD_POST_START };
};

export const addPostSuccess = (post) => {
  return { type: POSTS_ADD_POST_SUCCESS, payload: post };
};
