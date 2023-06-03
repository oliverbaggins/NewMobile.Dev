import AsyncStorage from "@react-native-async-storage/async-storage";

export default function authHeader() {
  const user = JSON.parse(AsyncStorage.getItem("user"))

  if (user && user.accessToken) {
    return { "Authorization": user.accessToken}
  } else {
    return {}
  }
}