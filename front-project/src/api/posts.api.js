import fetchDB from "../utils/api";

export const postsApi = {
  addPost({ authorId, description, title }) {
    return fetchDB("posts/new", {
      method: "POST",
      body: {
        title,
        description,
        authorId,
      },
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
  },
};
