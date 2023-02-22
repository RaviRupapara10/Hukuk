import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/UserLogin/Login';
import Registration from '../screen/UserLogin/Registration';
import VerifyCode from '../screen/UserLogin/VerifyCode';
import PasswordReset from '../screen/UserLogin/PasswordReset';
import DrowerType01 from '../Drowers/DrowerType01';
import HomeScreen from '../screen/HomeScreen';
import DrowerTry from '../Drowers/DrowerTry';
import LeaderBoard from '../screen/DrowerScreens/Leaderboard';


const Stack = createNativeStackNavigator();


export type navigationParams = {
  Registration: undefined;
  Login: undefined;
  DrowerTry: undefined;
}

const NavigationData = () => {
  return (

    <Stack.Navigator initialRouteName='Registration'>
      <Stack.Group
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
        <Stack.Screen name="DrowerType01" component={DrowerType01} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="DrowerTry" component={DrowerTry} /> */}
      </Stack.Group>
      <Stack.Group>
      <Stack.Screen name="Leaderboard" component={LeaderBoard} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default NavigationData