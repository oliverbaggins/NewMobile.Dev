import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import Start from "../pages/start/Start";
import LoginRoute from "./login_route";
import SignupRoute from "./signup_route";

const Stack = createStackNavigator();

export default function StartingRoute() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
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

