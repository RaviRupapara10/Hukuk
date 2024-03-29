import { Dimensions, StyleSheet, Text, View, Image, DrawerLayoutAndroid, TouchableOpacity, ScrollView, } from 'react-native'
import React, { useContext, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native';
import DrowerType01 from '../Drowers/DrowerType01';
import { Icon } from '@rneui/themed';
import { TextInput } from 'react-native-gesture-handler';
import { Avatar } from '@rneui/base';
import EventsHome from '../Componant/EventsHome';
// import { TouchableOpacity } from 'react-native-gesture-handler';


const s = require('../extra/styles');

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const HomeScreen = () => {

  const drawer = useRef<DrawerLayoutAndroid>(null);
  const navigationView = () => (
    <DrowerType01 />

  );




  // const Newdrawer = route.params.drawer

  // const drawer = useRef<DrawerLayoutAndroid>();

  // const drawer = useRef<DrawerLayoutAndroid>(null);


  return (
    <DrawerLayoutAndroid
      drawerWidth={(deviceWidth / 1.3)}
      drawerBackgroundColor="transparent"
      ref={drawer}
      renderNavigationView={navigationView}>

      <View style={[{ height: '100%', alignSelf: 'center' }, s.backGroundColor]}>
        <SafeAreaView style={{ width: deviceWidth - 40, alignSelf: 'center' }}>
          <ScrollView  >
            <View >


              {/* spearchbar */}
              <View>
                <View style={{ height: 50, flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', alignItems: 'center', display: 'flex', marginTop: 10, alignSelf: 'center' }}>
                  <View>
                    <View>
                      <TouchableOpacity
                        onPress={() => { console.log('Pressed'); drawer.current?.openDrawer() }}

                      >
                        <View style={[s.CompShadow, s.BtnBackground]}>
                          <Image
                            source={require('../Images/HomeScreen/DrowerIcon.png')}
                            style={{ height: 15, width: 15, alignSelf: 'center' }}
                          />
                        </View>
                      </TouchableOpacity>

                    </View>
                  </View>





                  <View style={[{
                    flexDirection: 'row',
                    flex: 1, alignItems: 'center', margin: 10, height: 40, width: 50, backgroundColor: '#ffffff', alignContent: 'center', justifyContent: 'center', borderRadius: 15
                  }, s.CompShadow,]}>
                    <Icon

                      size={20}
                      name='search'
                      type='font-awesome'
                      style={{ marginLeft: 20, }}

                    />
                    <TextInput placeholder='Search for events' style={{ flex: 1, margin: 10 }}>

                    </TextInput>

                  </View>
                  <View style={[{}, s.CompShadow]}>
                    <Avatar
                      size={40}
                      rounded
                      source={require('../Images/Drower01/avatar.png')}
                    />
                  </View>
                </View>

              </View>

              {/* text */}
              <View style={{ width: deviceWidth, marginTop: 50, }}>
                <Text style={{ fontSize: 36, fontWeight: '300', }}>
                  Hello Fatmegul,</Text>
                <Text style={{ fontSize: 40, fontWeight: '700', }}>Good morning</Text>
              </View>
              <View style={{ marginTop: 50,marginBottom:10 }}>
                <Text style={{ fontSize: 24, fontWeight: '600' }}>Events</Text>
              </View>


              {/* Event cards */}
              <View >
                <EventsHome />
              </View>

              {/* circuls */}
              {/* <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 40 }}>
                <Avatar
                  size={'medium'}
                  rounded
                  source={require('../Images/Drower01/avatar.png')}
                  containerStyle={{ borderColor: '#FFFFFf', borderWidth: 1.5 }}
                />
              </View>
              <View style={{ width: 40 }}>
                <Avatar
                  size={'medium'}
                  rounded
                  source={require('../Images/Drower01/avatar.png')}
                  containerStyle={{ borderColor: '#FFFFFf', borderWidth: 1.5 }}
                />
              </View>
              <View style={{ width: 40 }}>
                <Avatar
                  size={'medium'}
                  rounded
                  source={require('../Images/Drower01/avatar.png')}
                  containerStyle={{ borderColor: '#FFFFFf', borderWidth: 1.5 }}
                />
              </View>
              <View style={{ width: 40 }}>
                <Avatar
                  size={'medium'}
                  rounded
                  source={require('../Images/Drower01/avatar.png')}
                  containerStyle={{ borderColor: '#FFFFFf', borderWidth: 1.5 }}
                />
              </View>
              <View style={{ width: 40 }}>
                <Avatar
                  size={'medium'}
                  rounded
                  source={require('../Images/Drower01/avatar.png')}
                  containerStyle={{ borderColor: '#FFFFFf', borderWidth: 1.5 }}
                />
              </View>






            </View> */}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>

    </DrawerLayoutAndroid>
  )
}

const styles = StyleSheet.create({})





export default HomeScreen
