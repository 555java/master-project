import { postsApi } from "../../api/posts.api";
import {
  loadUserPostsError,
  loadUserPostsStart,
  loadUserPostsSuccess,
} from "./posts.action";

export const loadUserPostsThunk = (userId) => {
  return async function (dispatch) {
    dispatch(loadUserPostsStart());
    postsApi
      .loadUserPosts(userId)
      .then((res) => {
        dispatch(loadUserPostsSuccess(res.user));
      })
      .catch((err) => {
        dispatch(loadUserPostsError(err));
      });
  };
};
