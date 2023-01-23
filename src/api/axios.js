import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api.wepollnow.com/",
});

export default axios;
