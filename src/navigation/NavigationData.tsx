import { Button, Pressable, Image, Platform } from 'react-native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/UserLogin/Login';
import Registration from '../screen/UserLogin/Registration';
import VerifyCode from '../screen/UserLogin/VerifyCode';
import PasswordReset from '../screen/UserLogin/PasswordReset';
import DrowerType01 from '../Drowers/DrowerType01';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Profiles from '../screen/DrowerScreens/LeaderBoardScreen/Screens/Profiles';
import LeaderBoard from '../screen/DrowerScreens/LeaderBoardScreen/Leaderboard';
import Chat from '../screen/DrowerScreens/Chat/Chat';
import ChatMassage from '../screen/DrowerScreens/Chat/ChatMassage';
import SinglePlayer from '../screen/DrowerScreens/LeaderBoardScreen/Screens/SinglePlayer';
import HomeScreen from '../screen/HomeScreen/HomeScreen';
import HomeSearch from '../screen/HomeScreen/HomeSearch';
import AllGames from '../screen/Quiz/AllGames';


const Stack = createNativeStackNavigator();


export type navigationParams = {
  Registration: undefined;
  Login: undefined;
  DrowerTry: undefined;
  DrowerType01: undefined;

}

const NavigationData = () => {


  return (

    <Stack.Navigator initialRouteName='AllGames'>
      <Stack.Group
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ChatMassage" component={ChatMassage} />
        <Stack.Screen name="SinglePlayer" component={SinglePlayer} />
        <Stack.Screen name="Profiles" component={Profiles} />
        <Stack.Screen name="Leaderboard" component={LeaderBoard} />
        {/* <Stack.Screen name="HomeSearch" component={HomeSearch} /> */}
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Screen name="AllGames" component={AllGames} />

      </Stack.Group>


      <Stack.Group>
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
        <Stack.Screen name="HomeSearch" component={HomeSearch} options={{ animation: 'slide_from_bottom',}} />
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
      // initialRouteName='HomeScreen'

      drawerContent={(props) => <DrowerType01 />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',
        },
      }} >
      <Drawer.Group screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="Chat" component={Chat} />
        <Drawer.Screen name="Leaderboard" component={LeaderBoard} />
        <Drawer.Screen name="Profiles" component={Profiles} />
        <Drawer.Screen name="AllGames" component={AllGames} />
      </Drawer.Group>

    </Drawer.Navigator>
  );
}

