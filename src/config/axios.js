import axios from "axios";

export const baseURL = "http://185.208.79.11:81";

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
    "Content-Type": "application/json",
    // Accept: '*/*',
  },
});

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    console.log(err);
    if (err.response.status === 401) {
      window.location.href = "/login";
    }
  }
);

export default instance;
