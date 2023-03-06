import { Dimensions, Pressable, StatusBar, StyleSheet, TextInput, View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Icon } from '@rneui/base'
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventQuiz from './Tabs/EventQuiz';
import SingleEventQuiz from './Tabs/SingleEventQuiz';
import RepeatQuiz from './Tabs/RepeatQuiz';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ButtonTab from '../../Componant/ButtonTab';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { BounceInRight } from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AllGames = () => {
  const [index, setIndex] = React.useState(0);
  const s = require("../../extraFiles/styles")
  const navigation = useNavigation();
  const route = useRoute();
  const Tab = createMaterialTopTabNavigator();


  return (
    <View style={{ flex: 1, backgroundColor: '#f5f8ff' }}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable onPress={() =>
            navigation.goBack()
          }>
            <View style={{}}>
              <Icon
                name='arrow-back-outline'
                type='ionicon'
                color='#797F8A'
                containerStyle={{ paddingRight: 10, justifyContent: 'center', height: 40, }}
                size={20}
              />
            </View>
          </Pressable>

          <Text style={styles.HeaderText}>Quizzes</Text>

        </View>
      </View>
      {/* tabs and  search bar */}

      <View style={styles.TopContainer}>
        <View style={styles.searchbar}>
          <Icon
            name='search'
            type='ionicon'
            color='#242629'
            containerStyle={{ justifyContent: 'center', paddingHorizontal: 10 }}
          />
          <TextInput style={{ flex: 1 }} placeholder='Criminal law'></TextInput>
          <Pressable style={{ justifyContent: 'center', paddingHorizontal: 10 }}>
            <Image source={require('../../Images/HomeScreen/close.png')}
            />
          </Pressable>
        </View>
      </View>

      <View style={{ height: '100%', }}>
        <Tabs />
      </View>
    </View>



  )
}


const Tab = createMaterialTopTabNavigator();

function Tabs() {

  return (


    <Tab.Navigator
      screenOptions={{
        tabBarAndroidRipple: { borderless: false, color: 'transparent' },
        // swipeEnabled:false,

        tabBarStyle: { elevation: 0, backgroundColor: '#F5F8FF', },


        tabBarLabel(props: any) {
          return (<ButtonTab {...props} />);
        },
        tabBarInactiveTintColor: '#E7EEFB-#ffffff',
        tabBarActiveTintColor: '#00AEFF-#0076FF',
        animationEnabled: false,
      }}
    >
      <Tab.Screen name="Event" component={EventQuiz} options={{}} />
      <Tab.Screen name="Single Event" component={SingleEventQuiz}
      />
      <Tab.Screen name="Repeat" component={RepeatQuiz} />
    </Tab.Navigator >

  );
}











export default AllGames

const styles = StyleSheet.create({

  header: {
    marginTop: StatusBar.currentHeight,
    // backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,

  }
  ,
  HeaderText: {
    fontSize: 22,
    fontWeight: '600',
    flex: 1
  },
  mainavatar: {
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },


  searchbar: {

    flexDirection: 'row',
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 16,
    elevation: 5,
    shadowColor: '#14484B',
    shadowOpacity: 52,
    height: 40,
    backgroundColor: '#ffffff',

    borderRadius: 15,
    margin: 5,


  },
  TopContainer: {


    alignContent: 'center',
    padding: 20
  },
  btn: {
    alignItems: 'center',

    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 12 },
    shadowRadius: 16,
    elevation: 5,
    shadowColor: '#14484B',
    shadowOpacity: 52,
    // elevation: 10,
  },
})