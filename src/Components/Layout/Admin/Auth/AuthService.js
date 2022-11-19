import axios from 'axios'

const baseURL = "https://wepollnow.azurewebsites.net/user"

class AuthService {
  login(email, password) {
    return axios.post(`${baseURL}/login/`, {
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