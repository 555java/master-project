// function ApiError(message, data, status) {
//   let response = null;
//   let isObject = false;
//   try {
//     response = JSON.parse(data);
//     isObject = true;
//   } catch (e) {
//     response = data;
//   }
//   this.response = response;
//   this.message = message;
//   this.status = status;
//   this.toString = function () {
//     return `${this.message}\nResponse:\n${
//       isObject ? JSON.stringify(this.response, null, 2) : this.response
//     }`;
//   };
// }

import { isIterableObject } from "./isIterableObject";

// const fetchDB = (path, userOptions = {}) => {
//   const defaultOptions = {};
//   const defaultHeaders = {};
//   const options = {
//     ...defaultOptions,
//     ...userOptions,
//     headers: {
//       ...defaultHeaders,
//       ...userOptions.headers,
//     },
//   };
//   const url = `http://localhost:8080/${path}`;

//   const isFile = options.body instanceof File;
//   const isFormData = options.body instanceof FormData;

//   if (
//     options.body &&
//     typeof options.body === "object" &&
//     !isFile &&
//     !isFormData
//   ) {
//     options.body = JSON.stringify(options.body);
//   }

//   let response = null;
//   return fetch(url, options)
//     .then((responseObject) => {
//       response = responseObject;
//       if (response.status === 401) {
//         console.log("error 401");
//       }

//       if (response.status < 200 || response.status >= 300) {
//         return response.text();
//       }
//       return response.json();
//     })
//     .then((parsedResponse) => {
//       if (response.status < 200 || response.status >= 300) {
//         throw parsedResponse;
//       }
//       return parsedResponse;
//     })
//     .catch((error) => {
//       if (response) {
//         throw new ApiError(
//           `Request failed from Api.js with status ${response.status}.`,
//           error,
//           response.status
//         );
//       } else {
//         throw new ApiError(error.toString(), null, "REQUEST_FAILED");
//       }
//     });
// };

class ApiError extends Error {
  constructor(message, details) {
    super(message);
    this.details = details;
  }
}

async function fetchDB(endpoint, method = "GET", body = null, headers = {}) {
  const apiUrl = "http://localhost:8080";
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
    console.log(response);

    if (!response.ok) {
      const text = await response.text();
      let details;

      try {
        details = JSON.parse(text);
      } catch (e) {
        details = null;
      }

      throw new ApiError(`Error ${response.status}: ${text}`, details);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}
export default fetchDB;
