import axios from "axios";

export const apiProcesser = async ({ method, url, data, _id }) => {
  const headers = {
    Authorization: _id ?? null,
  };
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
