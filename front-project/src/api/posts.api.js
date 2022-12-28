import fetchDB from "../utils/api";

export const postsApi = {
  addPost({ authorId, description, title, images }) {
    const payload = new FormData();
    for (const image in images) {
      if (isNaN(image)) continue;
      payload.append("images", images[image]);
    }
    payload.append("authorId", authorId);
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
};
