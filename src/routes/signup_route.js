import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import InsertEmail from "../pages/insert-email/InsertEmail";

import HomeRoute from "./home_route";

const Stack = createStackNavigator();

export default function SignupRoute() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="InsertEmail" 
          component={InsertEmail}
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

