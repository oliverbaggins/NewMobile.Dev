import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddRemedy from '../../pages/home/AddRemedy';
import Perfil from '../../pages/perfil/index';
import StartingRoute from '../../routes/starting_route'
import CustomDrawer from './custom_drawer';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
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
      name='Perfil' 
      component={Perfil} 
      options={{headerShown: false}}
    />
    <Drawer.Screen
      name="StartingRoute"
      component={StartingRoute}
      options={{ headerShown: false }}
    />
    </Drawer.Navigator>
  )
}

export default HomeDrawer;