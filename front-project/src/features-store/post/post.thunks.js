import { FORM_ERROR } from "final-form";
import { postsApi } from "../../api/posts.api";
import {
  addPostError,
  addPostStart,
  addPostSuccess,
  loadPostError,
  loadPostStart,
  loadPostSuccess,
} from "./post.action";

export const addPostThunk = ({
  authorId,
  authorUsername,
  description,
  title,
  images,
}) => {
  return async function (dispatch, getState, router) {
    dispatch(addPostStart());
    return postsApi
      .addPost({ authorId, authorUsername, description, title, images })
      .then((res) => {
        dispatch(addPostSuccess(res.newPost));
        router.navigate(`/posts/${res.newPost._id}`);
      })
      .catch((err) => {
        dispatch(addPostError());
        return {
          [FORM_ERROR]: err?.message ?? "Post error",
        };
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
        dispatch(loadPostError(err));
      });
  };
};
