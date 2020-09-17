import axios from "axios";

const API_URL = "http://localhost:4000/api/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, lastName, Address, City , Country, PhoneNumber ,email, password) {
    return axios.post(API_URL + "signup", {
      username,
      lastName,
      Address,
      City,
      Country,
      PhoneNumber,
      email,
      password
    });
  }

  getCurrentUser() {
    // console.log(localStorage);
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();