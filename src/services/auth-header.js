import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function authHeader() {
  const user = await AsyncStorage.getItem("user");

  if (user) {
    const parsedUser = JSON.parse(user);
    if (parsedUser.accessToken) {
      return { "Authorization": parsedUser.accessToken };
    }
  }

  return {};
}
