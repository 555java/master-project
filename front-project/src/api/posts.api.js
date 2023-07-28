import fetchDB from "../utils/api";

export const postsApi = {
  addPost({ authorId, authorUsername, description, title, images }) {
    const payload = new FormData();

    for (const image of images) {
      payload.append("images", image);
    }

    payload.append("authorId", authorId);
    payload.append("authorUsername", authorUsername);
    payload.append("description", description);
    payload.append("title", title);

    return fetchDB("posts/new", {
      method: "POST",
      body: payload,
      credentials: "include",
    });
  },
  loadPost(postId) {
    return fetchDB(`posts/${postId}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
  },
  loadUserPosts(userId) {
    return fetchDB(`posts/user/${userId}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
  },
};
