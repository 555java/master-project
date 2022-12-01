import { FORM_ERROR } from "final-form";
import { postsApi } from "../../api/posts.api";
import { addPostStart, addPostSuccess } from "./posts.action";

export const addPostThunk = ({ authorId, description, title }) => {
  return async function (dispatch) {
    dispatch(addPostStart());
    return postsApi
      .addPost({ authorId, description, title })
      .then((res) => dispatch(addPostSuccess(res.newPost)))
      .catch((err) => {
        return { [FORM_ERROR]: err?.response?.message || "Post error" };
      });
  };
};
