import { useNavigation } from '@react-navigation/native'

import { Input, CheckBox } from '@rneui/themed';
import React, { useLayoutEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = () => {
  const [check1, setCheck1] = useState(false);


  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])



  return (

    <ScrollView style={styles.container}>
      <View style={{}}>
        <View style={{ height: 0 }}>
          <Image
            source={require('../../Images/screen1/loginScreen.png')}
            style={{
              width: windowWidth,
              height: 800,
            }}
          />
        </View>




        <View style={{ width: 300, alignSelf: 'center' }}>
          <View style={{ marginTop: 136 }}>
            <Text style={styles.headerText}>Welcome</Text>
          </View>
          <View style={{ height: '100%', marginTop: 330 }} >
            <View style={{}}>

              <View style={[styles.RegistrationBackground, styles.shadow]}>
                <View>

                  <Input
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    containerStyle={{ borderBottomColor: 'rgba(0, 0, 0, 0.08)', borderBottomWidth: 1, height: 50, }}
                    placeholder="Email"
                    leftIcon={
                      <Image
                        source={require('../../Images/screen1/Message.png')}
                        style={{ margin: 2, alignSelf: 'center', marginRight: 5 }} />
                    }
                  />

                  <Input
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    containerStyle={{ borderBottomColor: 'rgba(0, 0, 0, 0.08)', height: 50, }}
                    placeholder="Password"
                    leftIcon={
                      <Image
                        source={require('../../Images/screen1/Lock.png')}
                        style={{ margin: 2, alignSelf: 'center', marginRight: 5 }} />
                    }
                  />
                </View>
              </View>

              <View style={{ marginTop: 20 }}>
                <TouchableOpacity onPress={() => { navigation.navigate(('HomeScreen' as never)) }}>
                  <View style={{ alignSelf: 'center', }}>
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
                </TouchableOpacity>
              </View>


              <TouchableOpacity
                onPress={() => { navigation.navigate(('PasswordReset' as never)) }}>
                <View style={{ alignSelf: 'center', marginTop: 20 }}>
                  <View >
                    <Text>

                      Forgot password?
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <View style={{ marginTop: 10, }}>
                <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 0, }}>
                  <CheckBox

                    checked={check1}
                    onPress={() => setCheck1(!check1)}
                    containerStyle={{ backgroundColor: 'transparent', width: 40, height: 40 }}
                  />
                  <Text>
                    Privacy Policy using our services and
                    you agree to the Terms of Use.
                  </Text>
                </View>
              </View>

              {/* <View style={styles.boxLarge} ></View> */}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>


  )
}

export default Login

const styles = StyleSheet.create({

  headerText: {

    fontWeight: '800',
    fontSize: 36,
    lineHeight: 43,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 0.3,
    alignSelf: 'center',
    // fontFamily: 'sfPro'  

  },
  RegistrationBackground: {


    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#FAFCFF',
    // backgroundColor: 'red',
    borderRadius: 13,
    padding: 15,
    justifyContent: 'center',



  },
  shadow: {
    shadowColor: 'rgba(94, 99, 107, 1)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },

  container: {
    flex: 1,
  },

})