import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://10.0.0.7:3000/auth"

const signup = (email, password) => {
  return axios
    .post(API_URL + "/signup", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        AsyncStorage.setItem("user", JSON.stringify(response.data))
      }

      return response.data
    })
}

const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        AsyncStorage.setItem("user", JSON.stringify(response.data))
      }
      
      return response.data
    })
}

const logout = () => {
  AsyncStorage.removeItem("user")
}

const getCurrentUser = () => {
  return JSON.parse(AsyncStorage.getItem("user"))
}

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
}

export default authService