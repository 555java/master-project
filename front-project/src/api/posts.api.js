import fetchDB from "../utils/api";

export const postsApi = {
  addPost({ authorId, authorUsername, description, title, images }) {
    return fetchDB("posts/new", "POST", {
      authorId,
      authorUsername,
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
