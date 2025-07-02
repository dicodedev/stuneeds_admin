import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  // config.headers["Content-Type"] = "application/json";
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response?.status == 401) {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("USER");
      // window.location.reload();
    } else if (response?.status === 404) {
      //Show not found
    }

    throw error;
  }
);

export default axiosClient;
