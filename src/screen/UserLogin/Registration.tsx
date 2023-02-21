import { Dimensions, StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { CheckBox, Input } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Registration = () => {

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
            source={require('../../Images/ScreenRegistration/Vector.png')}
            style={{
              width: windowWidth,
              height: 800,
            }}
          />
        </View>




        <View style={{ width: 300, alignSelf: 'center' }}>
          <View style={{ marginTop: 136 }}>
            <Text style={styles.headerText}>Registration</Text>
          </View>
          <View style={{ height: '100%', marginTop: 150 }} >
            <View style={{}}>

              <View style={[styles.RegistrationBackground, styles.shadow]}>
                <View>
                  <Input
                    placeholder="User name"
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    containerStyle={{ borderBottomColor: 'rgba(0, 0, 0, 0.08)', borderBottomWidth: 1, height: 50, }}
                    leftIcon={
                      <Image
                        source={require('../../Images/ScreenRegistration/Profile.png')}
                        style={{ margin: 2, alignSelf: 'center', marginRight: 5 }} />
                    }
                  />
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
                    containerStyle={{ borderBottomColor: 'rgba(0, 0, 0, 0.08)', borderBottomWidth: 1, height: 50, }}
                    placeholder="Password"
                    leftIcon={
                      <Image
                        source={require('../../Images/screen1/Lock.png')}
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
                <TouchableOpacity onPress={() => { navigation.navigate(('Login' as never)) }}>
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
                        fontSize: 20,
                        fontWeight: '600',
                        color: '#fff',
                      }}>Send</Text>
                    </LinearGradient>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ alignSelf: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', }}>
                  OR
                </Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10, alignSelf: 'center', }}>
                <TouchableOpacity>
                  <Image

                    source={require('../../Images/ScreenRegistration/Linkedin.png')}
                    style={{ height: 70, width: 70, marginVertical: 9, padding: 0 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{ height: 70, width: 70, marginVertical: 8, padding: 0, }}
                    source={require('../../Images/ScreenRegistration/fb.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{ height: 70, width: 70, marginVertical: 8, padding: 0 }}
                    source={require('../../Images/ScreenRegistration/apple.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{ height: 70, width: 70, marginVertical: 8, padding: 0 }}
                    source={require('../../Images/ScreenRegistration/google.png')}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignSelf: 'center', alignContent: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 0, }}>
                <CheckBox

                  checked={check1}
                  onPress={() => setCheck1(!check1)}
                  containerStyle={{ backgroundColor: 'transparent', width: 40, height: 40 }}
                />
                <Text>

                  I have read and accept the Open Consent Text.
                </Text>
              </View>

              {/* <View style={styles.boxLarge} ></View> */}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>





  )
}

export default Registration

const styles = StyleSheet.create({

  headerText: {

    fontWeight: '800',
    fontSize: 36,
    lineHeight: 43,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 0.3,
    alignSelf: 'center'

  },
  RegistrationBackground: {


    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#FAFCFF',
    // backgroundColor: 'red',
    borderRadius: 13,
    padding: 15,


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