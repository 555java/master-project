async function apiRequest(endpoint, method = "GET", body = null, headers = {}) {
  const apiUrl = "<http://localhost:8080>";
  const url = `${apiUrl}${endpoint}`;

  const hasFile =
    body && Object.values(body).some((val) => val instanceof File);

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
        formData.append(key, body[key]);
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
      throw new Error(`Error ${response.status}: ${text}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}
