import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient';
import { Input } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../../Componant/CustomText';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PasswordReset = () => {

  const [check1, setCheck1] = useState(false);
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={{ height: 0 }}>
          <Image
            source={require('../../Images/ForgetPass/vector.png')}
            style={{
              width: windowWidth,
              height: windowHeight,
            }}
          />
        </View>

        <View style={{ width: 300, alignSelf: 'center' }}>
          <View style={{ marginTop: 136 }}>
            <Text style={styles.headerText}>Password
              Reset</Text>
            <Text style={styles.subHeaderText} >We will send a new password to your email</Text>
          </View>
          <View style={{ height: '100%', marginTop: 160 }} >
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

                </View>
              </View>

              <View style={{ marginTop: 50 }}>
                <TouchableOpacity onPress={() => { navigation.navigate(('VerifyCode' as never)) }}>
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
                      }}>Send</Text>
                    </LinearGradient>
                  </View>
                </TouchableOpacity>
              </View>


              {/* <View style={styles.boxLarge} ></View> */}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default PasswordReset

const styles = StyleSheet.create({
  headerText: {

    fontWeight: '800',
    fontSize: 36,
    lineHeight: 43,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 0.3,
    alignSelf: 'center',
    width: 160,

  },


  subHeaderText: {
    fontWeight: '400',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 0.3,
    alignSelf: 'center',
    lineHeight: 20,
    marginTop: 20,
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