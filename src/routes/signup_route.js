import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import InsertEmail from '../pages/insert-email/InsertEmail';
import Confirm from '../pages/confirm/Confirm';
import HomeDrawer from "./drawer_routes/home_drawer";

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
        name="Confirm"
        component={Confirm}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="HomeRoute" 
        component={HomeDrawer}
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  )
}