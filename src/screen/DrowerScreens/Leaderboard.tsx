import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Header from '../../Componant/Header'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LeaderBoard = () => {
  const navigation = useNavigation();

  const [search, setSearch] = React.useState('');



return (
  <View style={styles.container}>

    {/* <Header headername='LeaderBoard'/> */}
  </View>
)
}

export default LeaderBoard

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight, 
    //  padding:10,
    backgroundColor: 'red',

  }
})