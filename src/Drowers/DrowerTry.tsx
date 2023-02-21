import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {

  DrawerLayoutAndroid,

  Dimensions,

} from 'react-native';



import DrowerType01 from './DrowerType01';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const DrowerTry = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const navigation = useNavigation();




  const navigationView = () => (

    //<SafeAreaView>
    <DrowerType01 />
    //</SafeAreaView>
    // <></>


  );

  return (
    <DrawerLayoutAndroid
      drawerWidth={(deviceWidth / 1.3)}
      drawerBackgroundColor="transparent"
      ref={drawer}
      renderNavigationView={navigationView}>
      {/* <DrowerType01 /> */}

    </DrawerLayoutAndroid>
  );
};


export default DrowerTry;