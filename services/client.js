import { ApiError } from "@/services/ApiError";

const STATUS_MESSAGES = {
  400: "store not found",
  401: "unauthorized",
  500: "server error",
};

async function apiClient(path, options = {}) {
  const apiKey = process.env.SALLING_API_KEY;
  const baseUrl = process.env.SALLING_API_BASE_URL;

  if (!apiKey || !baseUrl) {
    throw new ApiError("Missing API configuration", {
      status: 0,
      statusText: "Config Error",
    });
  }

  const url = baseUrl + path;

  try {
    const response = await fetch(url, {
      ...options,
      headers: { ...options.headers, Authorization: `Bearer ${apiKey}` },
    });

    if (!response.ok) {
      const errorText = await response.text();
      const message = STATUS_MESSAGES[response.status] ?? "Unexpected error";
      throw new ApiError(message, {
        status: response.status,
        statusText: response.statusText,
        details: errorText,
      });
    }

    const text = await response.text();
    return text ? JSON.parse(text) : null;
  } catch (err) {
    if (err instanceof ApiError) throw err;
    throw new ApiError(err.message, {
      status: 0,
      statusText: "Network Error",
      details: err.message,
    });
  }
}

export { apiClient };
