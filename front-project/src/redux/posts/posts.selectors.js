export const getIsPostsLoading = (state) => state.posts.isPostsLoading;

export const getPostsError = (state) => state.posts.postsError;

export const getBrowsedUserPosts = (state, userId) => {
  if (state.posts.browsedUser && state.posts.browsedUser.id === userId)
    return state.posts.posts;
  return undefined;
};

export const getBrowsedUser = (state, userId) => {
  if (state.posts.browsedUser && state.posts.browsedUser.id === userId)
    return state.posts.browsedUser;
  return undefined;
};
