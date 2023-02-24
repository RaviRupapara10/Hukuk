import { Button ,Pressable,Image, Platform} from 'react-native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/UserLogin/Login';
import Registration from '../screen/UserLogin/Registration';
import VerifyCode from '../screen/UserLogin/VerifyCode';
import PasswordReset from '../screen/UserLogin/PasswordReset';
import DrowerType01 from '../Drowers/DrowerType01';
import HomeScreen from '../screen/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';
import LeaderBoard from '../screen/DrowerScreens/Leaderboard';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';


const Stack = createNativeStackNavigator();


export type navigationParams = {
  Registration: undefined;
  Login: undefined;
  DrowerTry: undefined;
  DrowerType01: undefined;

}

const NavigationData = () => {






  return (

    <Stack.Navigator initialRouteName='Leaderboard'>
      <Stack.Group
        screenOptions={{ headerShown: false }}
      >

        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />

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

  const leaderBoardHeader = {
    headerShadowVisible: false,
   
   
  };




  return (

    <Drawer.Navigator

      // initialRouteName='DrawerNavigation'

      drawerContent={(props) => <DrowerType01 />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',
        },
      }} >
      <Drawer.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Drawer.Group>
      <Drawer.Group >
        <Stack.Screen name="Leaderboard" component={TabNavigation} options={leaderBoardHeader} />


      </Drawer.Group>

    </Drawer.Navigator>

  );
}



