import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-server-mocha.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
