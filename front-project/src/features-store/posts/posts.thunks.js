import { FORM_ERROR } from "final-form";
import { postsApi } from "../../api/posts.api";
import {
  addPostError,
  addPostStart,
  addPostSuccess,
  loadPostError,
  loadPostStart,
  loadPostSuccess,
} from "./posts.action";

export const addPostThunk = ({ authorId, description, title, images }) => {
  return async function (dispatch) {
    dispatch(addPostStart());
    return postsApi
      .addPost({ authorId, description, title, images })
      .then((res) => {
        return dispatch(addPostSuccess(res.newPost));
      })
      .catch((err) => {
        dispatch(addPostError());
        return { [FORM_ERROR]: err?.response?.message || "Post error" };
      });
  };
};

export const loadPostThunk = (postId) => {
  return async function (dispatch) {
    dispatch(loadPostStart());
    postsApi
      .loadPost(postId)
      .then((res) => dispatch(loadPostSuccess(res.post)))
      .catch((err) => {
        console.log(err);
        dispatch(loadPostError(err));
      });
  };
};
