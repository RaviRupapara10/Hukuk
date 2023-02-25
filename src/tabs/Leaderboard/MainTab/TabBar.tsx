import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Group from '../Screens/Group';
import SinglePlayer from '../Screens/SinglePlayer';
import TabBarButton from './TabBarButton';



const Tab = createMaterialTopTabNavigator();

export default function TabBar() {
  const tabs: {
    name: string,
    component: () => JSX.Element,
    tabBarLabel: string
  }[] = [
      {
        name: 'Group',
        component: Group,
        tabBarLabel: 'Group'
      },
      {
        name: 'SinglePlayer',
        component: SinglePlayer,
        tabBarLabel: 'Single Player'
      }
    ];
  return (
    <Tab.Navigator
      initialRouteName={tabs[0].name}
      tabBar={(props) => <TabBarButton {...props} tabs={tabs} />}>
 
      {
        tabs.map((x, i) =>
          <Tab.Screen key={i} name={x.name} component={x.component} options={{ tabBarLabel: x.tabBarLabel, }} />
        )
      }
    </Tab.Navigator >

  );
}
