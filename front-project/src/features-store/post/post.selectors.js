export const getIsPostLoading = (state) => state.post.isPostLoading;
export const getIsPostUploading = (state) => state.post.isPostUploading;

export const getUploadedPost = (state) => {
  const post = state.post.post;
  return post ? post : undefined;
};
export const getNumberOfImages = (state, postId) => {
  const post = state.post.post;
  return post && post._id === postId ? post.image.length : undefined;
};
export const getPostError = (state) => state.post.error;
