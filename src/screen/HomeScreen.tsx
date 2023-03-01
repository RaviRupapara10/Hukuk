import { Dimensions, StyleSheet, Text, View, Image, DrawerLayoutAndroid, TouchableOpacity, ScrollView, Alert, Modal, Pressable, Button } from 'react-native'
import React, { useContext, useRef, useState, useMemo, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native';
import DrowerType01 from '../Drowers/DrowerType01';
import { Icon } from '@rneui/themed';
import { TextInput } from 'react-native-gesture-handler';
import { Avatar } from '@rneui/base';
import EventsHome from '../Componant/EventsHome';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
// import { TouchableOpacity } from 'react-native-gesture-handler';


const s = require('../extraFiles/styles');



const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const HomeScreen = (prop: any) => {



  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["33%", "85%"], []);

  // callbacks
  const handleSheetChange = useCallback((index: any) => {
    // console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);


  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params

  // console.log(data)




  // const Newdrawer = route.params.drawer

  // const drawer = useRef<DrawerLayoutAndroid>();

  // const drawer = useRef<DrawerLayoutAndroid>(null);


  return (


    <View style={[{ height: '100%', alignSelf: 'center', width: deviceWidth }, s.backGroundColor]}>
      <SafeAreaView style={{ width: deviceWidth - 40, alignSelf: 'center', flex: 1 }}>
        <ScrollView  >
          <View >


            {/* spearchbar */}
            <View>
              <View style={{ height: 50, flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', alignItems: 'center', display: 'flex', marginTop: 10, alignSelf: 'center' }}>
                <View>
                  <View>
                    <TouchableOpacity
                      onPress={() => prop.navigation.toggleDrawer()}

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
                <TouchableOpacity
                  onPress={() => { navigation.navigate('Profiles' as never) }}
                >
                  <View style={[{}, s.CompShadow]}>
                    <Avatar
                      size={40}
                      rounded
                      source={require('../Images/Drower01/avatar.png')}
                    />
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            {/* text */}
            <View style={{ width: deviceWidth, marginTop: 50, }}>
              <Text style={{ fontSize: 36, fontWeight: '300', }}>
                Hello Fatmegul,</Text>
              <Text style={{ fontSize: 40, fontWeight: '700', }}>Good morning</Text>
            </View>




            {/* cards */}
            <View style={{ marginTop: 100, marginBottom: 10 }}>
              <Text style={{ fontSize: 24, fontWeight: '600' }}>Events</Text>
            </View>


            {/* Event cards */}
            <View  >
              <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false} >
                <View style=
                  {{ flexDirection: 'row' }}>
                  <View style={{ marginRight: 10 }}>
                    <EventsHome gradColor={['rgba(0, 174, 255, 1)',
                      'rgba(0, 118, 255, 1)']} />
                  </View>
                  <View style={{ marginRight: 10 }}>
                    <EventsHome gradColor={['rgba(253, 80, 79, 1)',
                      'rgba(255, 129, 129, 1)']} />
                  </View>
                </View>
              </ScrollView>
            </View>

            {/* bottom model */}

          </View>
        </ScrollView>
      </SafeAreaView>
      <View>
        <View style={styles.container}>
          {/* <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
                <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
                <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} /> */}
          <Button title="Close" onPress={() => handleClosePress()} />
          <BottomSheet
            ref={sheetRef}
            snapPoints={snapPoints}
            onChange={handleSheetChange}
            backgroundStyle={{ borderTopLeftRadius: 30, borderTopEndRadius: 0, backgroundColor: '#F5F8FF', elevation: 5 }}
          // backdropStyle={styles.backDrop}
          >
            <BottomSheetView style={{
              // backgroundColor:'red'
            }}>
              <Text style={{ color: '#242629', fontWeight: '700', fontSize: 20, margin: 20 }}>Continue</Text>

              <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 20 }}>
                <View style={{ flex: 1 }}>
                  <View>
                    <Text style={{ fontWeight: '300', fontSize: 14, color: '#242629' }}>25, Sep</Text>
                    <Text style={{ fontWeight: '700', fontSize: 21, color: '#242629', paddingHorizontal:  3 }}>next lesson</Text>
                  </View>
                  <Text style={{ fontWeight: '400', fontSize: 18, color: '#797F8A' }}>
                    Criminal law</Text>
                </View>

                <View>
                  <Image
                    source={require('../Images/HomeScreen/Rectangle.png')}
                  />
                </View>
              </View>
            </BottomSheetView>
          </BottomSheet>
        </View>
      </View>
    </View>


  )
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 260,
    // backgroundColor: 'red',
    height: deviceHeight
  },

})
export default HomeScreen
