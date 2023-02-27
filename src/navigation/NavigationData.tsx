import { Button, Pressable, Image, Platform } from 'react-native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/UserLogin/Login';
import Registration from '../screen/UserLogin/Registration';
import VerifyCode from '../screen/UserLogin/VerifyCode';
import PasswordReset from '../screen/UserLogin/PasswordReset';
import DrowerType01 from '../Drowers/DrowerType01';
import HomeScreen from '../screen/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LeaderBoard from '../screen/DrowerScreens/Leaderboard';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import TabBar from '../tabs/Leaderboard/MainTab/TabBar';
import Profiles from '../tabs/Leaderboard/Screens/Profiles';
import SinglePlayer from '../tabs/Leaderboard/Screens/SinglePlayer';


const Stack = createNativeStackNavigator();


export type navigationParams = {
  Registration: undefined;
  Login: undefined;
  DrowerTry: undefined;
  DrowerType01: undefined;

}

const NavigationData = () => {






  return (

    <Stack.Navigator initialRouteName='Registration'>
      <Stack.Group
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        {/* <Stack.Screen name="PasswordReset" component={PasswordReset} /> */}
        {/* <Stack.Screen name="SinglePlayer" component={SinglePlayer} /> */}
        {/* <Stack.Screen name="TabNavigation" component={TabNavigation} /> */}
      </Stack.Group>
      <Stack.Group>

      </Stack.Group>


    </Stack.Navigator>
  )
}

export default NavigationData




function DrawerNavigation() {

  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();

  return (

    <Drawer.Navigator

      // initialRouteName='DrawerNavigation'
      initialRouteName='Leaderboard'

      drawerContent={(props) => <DrowerType01 />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',
        },
      }} >
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Profiles" component={Profiles} />

      </Stack.Group>
      <Drawer.Group screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="DrawerScreen" component={DrawerScreen} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
}

function DrawerScreen() {

  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Group screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Leaderboard" component={TabBar} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
}








