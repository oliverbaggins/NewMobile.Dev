import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import HomeDrawer from "./drawer_routes/home_drawer";
import CriarLembrete from "../pages/criar_lembrete/CriarLembrete"

const Stack = createStackNavigator();

export default function HomeRoute() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeDrawer" 
          component={HomeDrawer}
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CriarLembrete" 
          component={CriarLembrete}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
  );
}

