import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Group from '../tabs/Leaderboard/Screens/Group';
import SinglePlayer from '../tabs/Leaderboard/Screens/SinglePlayer';
import LeaderBoard from '../screen/DrowerScreens/Leaderboard';
import Header from '../Componant/Header';
import TabBarButton from '../tabs/Leaderboard/MainTab/TabBarButton';



const Tab = createMaterialTopTabNavigator();

export default function TabNavigation() {
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, color: '#ffffff' },
        tabBarItemStyle: { width: '100%', backgroundColor: 'green', margin: 2, borderRadius: 20, },
        tabBarStyle: {
          height: 50, shadowOffset: { width: 0, height: 10 },
          shadowRadius: 2,
          elevation: 5,
          shadowOpacity: 0.36,
        },

      }}
    >

      <Tab.Screen name="Group" component={Group}  />
      <Tab.Screen name="SinglePlayer" component={SinglePlayer} />
    </Tab.Navigator>

  );
}
