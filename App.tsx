// In App.js in a new project
import 'react-native-gesture-handler';


import * as React from 'react';

import { useFonts } from 'expo-font';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import NavigationData from './src/navigation/NavigationData';
import { Ffont } from './src/extra/styles';

function App() {

  // async componentDidMount() {
  //   await Font.loadAsync({
  //     'Lato-Regular': require('./src/assets/fonts/Lato-Regular.ttf')
  //   })
  //   setState({ fontLoaded: true });
  //   defaultFonts();
  // }

  // let oldRender = Text.prototype.render;
  // Text.prototype.render = function (...args) {
  //   let origin = oldRender.call(this, ...args);
  //   if (React.isValidElement(origin)) {
  //     var eleToClone = origin as React.ReactElement<any>
  //     return React.cloneElement(eleToClone, {
  //       style: [eleToClone.props.style, styles.defaultFontFamily]
  //     });
  //   }
  // };


  const [fontsLoaded] = useFonts(Ffont);

  return (

    <NavigationContainer >

      <NavigationData />

    </NavigationContainer>
  );
}

export default App;
