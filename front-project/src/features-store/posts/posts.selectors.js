export const getIsPostLoading = (state) => state.posts.isPostLoading;
export const getPostsById = (state, postId) =>
  state.posts.posts.find((post) => post._id === postId);
export const getNumberOfImages = (state, postId) => {
  const post = state.posts.posts.find((post) => post._id === postId);
  return post ? post.image.length : undefined;
};
export const getPostError = (state) => state.posts.error;
