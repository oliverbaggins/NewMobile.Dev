import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import InsertEmail from "../pages/insert-email/InsertEmail";
import InsertPassword from "../pages/insert-password/InsertPassword"
import ConfirmPassword from "../pages/confirm-password/ConfirmPassword"
import Quase from "../pages/quase/Quase"
import CadNome from "../pages/cad-nome/CadNome"
import Confirm from "../pages/confirm/Confirm"
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

