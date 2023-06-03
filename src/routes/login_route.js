import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import LogIn from "../pages/log-in/LogIn"
import HomeRoute from "./home_route";

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
          component={HomeRoute}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
  );
}

