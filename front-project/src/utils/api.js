import { isIterableObject } from "./isIterableObject";

async function fetchDB(endpoint, method = "GET", body = null, headers = {}) {
  const apiUrl = "http://localhost:3000/api";
  const url = `${apiUrl}/${endpoint}`;

  const hasFile =
    body &&
    Object.values(body).some(
      (val) =>
        val instanceof File ||
        (isIterableObject(val) &&
          Array.from(val).some((item) => item instanceof File))
    );

  if (!hasFile) {
    headers["Content-Type"] = "application/json";
  }

  const options = {
    method,
    headers,
    credentials: "include",
  };

  if (body) {
    if (hasFile) {
      const formData = new FormData();
      Object.keys(body).forEach((key) => {
        const value = body[key];
        if (isIterableObject(value)) {
          Array.from(value).forEach((item, index) => {
            formData.append(key, item);
          });
        } else {
          formData.append(key, value);
        }
      });
      options.body = formData;
    } else {
      options.body = JSON.stringify(body);
    }
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const text = await response.text();
      let details;

      try {
        details = JSON.parse(text);
      } catch (e) {
        details = { message: text };
      }

      throw new Error(details?.message || "Unexpected API error");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}
export default fetchDB;
