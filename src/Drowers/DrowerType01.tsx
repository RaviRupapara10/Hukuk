import { Dimensions, StyleSheet, Text, View, Image, Modal, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, ListItem } from '@rneui/themed';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import ReactNativeModal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const DrowerType01 = () => {

  const navigation = useNavigation();


  const LeaderBoardCLick=()=>{
    console.log('pressed');
    navigation.navigate(('Leaderboard' as never))
  }


  return (



    <View>
      <SafeAreaView >

        <View style={styles.container}>


          {/* top */}
          <View style={{ flexDirection: 'row', margin: 20, alignItems: 'center', marginVertical: 30 }} >
            <Avatar
              rounded
              source={require('../Images/Drower01/avatar.png')}
            />
            <View style={{ padding: 5 }}>
              <View>
                <Text style={{ fontSize: 17, fontWeight: '700' }}>Hallo, Mert</Text>
              </View>
              <View>
                <Text style={{ fontSize: 13, fontWeight: '300' }}>Subline hext here...</Text>
              </View>
            </View>

          </View>

          {/* bottom */}

          <View>

            <TouchableOpacity >
              <View style={{ marginLeft: 20, marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('../Images/Drower01/Tab1.png')} />
                  <Text style={{ fontSize: 19, fontWeight: '700', margin: 15 }}>Anasayfa</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity >
              <View style={{ marginLeft: 20, marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('../Images/Drower01/Tab2.png')} />
                  <Text style={{ fontSize: 19, fontWeight: '700', margin: 15 }}>Quiz</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={LeaderBoardCLick}
            >
              <View style={{ marginLeft: 20, marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('../Images/Drower01/Tab3.png')} />
                  <Text style={{ fontSize: 19, fontWeight: '700', margin: 15 }}>Leaderboard</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity >
              <View style={{ marginLeft: 20, marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('../Images/Drower01/Tab4.png')} />
                  <Text style={{ fontSize: 19, fontWeight: '700', margin: 15 }}>Sohbet</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity >
              <View style={{ marginLeft: 20, marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('../Images/Drower01/Tab5.png')} />
                  <Text style={{ fontSize: 19, fontWeight: '700', margin: 15 }}>Profil</Text>
                </View>
              </View>
            </TouchableOpacity>

          </View>

          {/* down */}
          <View style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0
          }}>
            <TouchableOpacity >
              <View style={{ marginLeft: 20, marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('../Images/Drower01/Symbol.png')}
                    style={{}} />
                  <Text style={{ fontSize: 19, fontWeight: '700', margin: 15 }}>Log out</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

        </View>

      </SafeAreaView>

    </View>

  )
}

export default DrowerType01

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF1F9',
    // backgroundColor: 'red',
    height: '100%',
    position: 'relative',
    borderTopEndRadius: 35,



  },
  backShadow: {
    // backgroundColor: 'rgba(72, 76, 82, 0.16)',
    // // backgroundColor: 'transparent',
    // height: '100%',
    // width: deviceWidth,

  }
})