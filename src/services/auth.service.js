import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authHeader from "./auth-header";

const API_URL = "http://192.168.68.1:3000/auth"

const signup = async (name, lastname, email, password) => {
  return axios
    .post(API_URL + "/signup", {
      name,
      lastname,
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

const login = async (email, password) => {
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

const loggeduser = async () => {
  const headers = await authHeader();
  return axios.get(API_URL + "/loggeduser", { headers });
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
  loggeduser,
  logout,
  getCurrentUser,
}

export default authService