import Axios from 'axios';

const axios = Axios.create({
  baseURL: "http://api.wepollnow.com/",
});

export default axios;