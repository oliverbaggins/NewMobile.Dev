import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import 'react-native-gesture-handler';

import Start from "../pages/start/Start";
import LoginRoute from "./login_route";
import SignupRoute from "./signup_route";
import HomeDrawer from "./drawer_routes/home_drawer";

const Stack = createStackNavigator();

export default function StartingRoute() {
  const [login, Setlogin] = useState(false);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem("user");

      if (token) {
        Setlogin(true);
      }
    } catch (error) {
      console.log('Error while retrieving token from AsyncStorage:', error);
    }
  };

  return (
    <Stack.Navigator>
      {login === true ? (
        <Stack.Screen 
          name="HomeRoute" 
          component={HomeDrawer}
          options={{ headerShown: false }} 
        />
      ) : (
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
      )}
      <Stack.Screen 
        name="LoginRoute" 
        component={LoginRoute}
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="SignupRoute" 
        component={SignupRoute}
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}
