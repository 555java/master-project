import {
  POST_ADD_POST_START,
  POST_ADD_POST_SUCCESS,
  POST_ADD_POST_ERROR,
  POST_LOAD_POST_START,
  POST_LOAD_POST_SUCCESS,
  POST_LOAD_POST_ERROR,
} from "./post.constants";

const initialState = {
  post: null,
  isPostUploading: false,
  isPostLoading: true,
  error: null,
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ADD_POST_START:
      return { ...state, isPostUploading: true };
    case POST_ADD_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        isPostUploading: false,
      };
    case POST_ADD_POST_ERROR:
      return {
        ...state,
        isPostUploading: false,
      };

    case POST_LOAD_POST_START:
      return { ...state, isPostLoading: true, error: null };
    case POST_LOAD_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        isPostLoading: false,
      };
    case POST_LOAD_POST_ERROR:
      return { ...state, isPostLoading: false, error: action.payload };

    default:
      return state;
  }
};
