import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import LogIn from "../pages/log-in/LogIn"
import HomeDrawer from "./drawer_routes/home_drawer";

const Stack = createStackNavigator();

export default function LoginRoute() {

  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="LogIn" 
          component={LogIn}
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="HomeRoute" 
          component={HomeDrawer}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
  );
}

