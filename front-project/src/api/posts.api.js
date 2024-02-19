import fetchDB from "../utils/api";

export const postsApi = {
  addPost({ description, title, images }) {
    return fetchDB("posts/new", "POST", {
      description,
      title,
      images,
    });
  },
  loadPost(postId) {
    return fetchDB(`posts/${postId}`, "GET");
  },
  loadUserPosts(userId) {
    return fetchDB(`posts/user/${userId}`, "GET");
  },
};
