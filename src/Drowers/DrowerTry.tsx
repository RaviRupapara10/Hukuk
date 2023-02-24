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

    <DrowerType01 />


  );

  return (
    <DrawerLayoutAndroid
    // style={{backgroundColor:'red'}}
      // drawerWidth={(deviceWidth / 1.3)}
      ref={drawer}
      renderNavigationView={navigationView}>
      {/* drawerBackgroundColor */}

    </DrawerLayoutAndroid>
  );
};


export default DrowerTry;