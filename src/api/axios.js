import Axios from 'axios';

const axios = Axios.create({
  baseURL: "https://wepollnow.azurewebsites.net/",
});

export default axios;
