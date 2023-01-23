import Axios from 'axios';

const axios = Axios.create({
  baseURL: "https://api.wepollnow.com/",
  // baseURL: "https://wepollnow.azurewebsites.net/",
});

export default axios;
