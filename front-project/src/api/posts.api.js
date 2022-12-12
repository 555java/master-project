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
    // and then just post it to your API using a regular POST:
    // for (var key of payload.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }
    return fetchDB("posts/new", {
      method: "POST",
      body: payload,
      credentials: "include",
    });
  },
};
