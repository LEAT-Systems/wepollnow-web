import axios from '../../../../api/axios.js'

// const baseURL = "https://wepollnow.azurewebsites.net/user"

class AuthService {
  login(email, password) {
    return axios.post(`/login`, {
      email,
      password
    }).then(response => {
      

      return response.data
    });
  }

  logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("refreshoken")
  }
}