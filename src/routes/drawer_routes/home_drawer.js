import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AddRemedy from '../../pages/home/AddRemedy';
import Perfil from '../../pages/perfil/index';
import CustomDrawer from './custom_drawer';
import CriarLembrete from "../../pages/criar_lembrete/CriarLembrete";

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  const StartingRoute = require("../starting_route").default;

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right"
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen 
        name='AddRemedy' 
        component={AddRemedy} 
        options={{headerShown: false}}
      />
      <Drawer.Screen 
        name="CriarLembrete" 
        component={CriarLembrete}
        options={{ headerShown: false }} 
      />
      <Drawer.Screen 
        name='Perfil' 
        component={Perfil} 
        options={{headerShown: false}}
      />
      <Drawer.Screen 
        name='StartingRoute' 
        component={StartingRoute} 
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  )
}
