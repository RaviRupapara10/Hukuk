import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Group from '../Screens/Group';
import SinglePlayer from '../Screens/SinglePlayer';
import TabBarButton from './TabBarButton';
import { View } from 'react-native';



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
    <View style={{
      flex: 1, backgroundColor: '#F5F8FF',
    }}>
      <Tab.Navigator
        initialRouteName={tabs[0].name}
        tabBar={(props) => <TabBarButton {...props} tabs={tabs} />}>

        {
          tabs.map((x, i) =>
            <Tab.Screen key={i} name={x.name} component={x.component} options={{ tabBarLabel: x.tabBarLabel, }} />
          )
        }
      </Tab.Navigator >
    </View>

  );
}
