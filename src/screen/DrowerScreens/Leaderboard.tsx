import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
// import Header from '../../Componant/Header'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


const LeaderBoard = () => {
  const navigation = useNavigation();

  const [search, setSearch] = React.useState('');



  return (
    <View style={styles.container}>
      <View>

        {/* <Header headername='LeaderBoard' /> */}
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <LinearGradient
            // Button Linear Gradient
            colors={['#73A0F4', '#4A47F5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              alignItems: 'center',
              width: 122,
              height: 50,
              borderRadius: 14,
              alignContent: 'center',
              justifyContent: 'center'
            }}>
            <Text style={{
              backgroundColor: 'transparent',
              fontSize: 18,
              fontWeight: '600',
              color: '#fff',
            }}>Log in</Text>
          </LinearGradient>
        </View>
        {/*  */}

        <View>
          <LinearGradient
            // Button Linear Gradient
            colors={['#73A0F4', '#4A47F5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              alignItems: 'center',
              width: 122,
              height: 50,
              borderRadius: 14,
              alignContent: 'center',
              justifyContent: 'center'
            }}>
            <Text style={{
              backgroundColor: 'transparent',
              fontSize: 18,
              fontWeight: '600',
              color: '#fff',
            }}>Log in</Text>
          </LinearGradient>
        </View>
      </View>

    </View>
  )
}

export default LeaderBoard

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight, 
    //  padding:10,
    // backgroundColor: 'red',
    flex: 1, backgroundColor: '#F5F8FF',

  }
})




