import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Group from '../Screens/Group';
import SinglePlayer from '../Screens/SinglePlayer';



const Tab = createMaterialTopTabNavigator();

export default function TabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12,backgroundColor:'blue', },
          tabBarItemStyle: { width: 100 ,backgroundColor:'green',margin:2, borderRadius: 20,},
          tabBarStyle: { backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen name="Group" component={Group} />
        <Tab.Screen name="SinglePlayer" component={SinglePlayer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
