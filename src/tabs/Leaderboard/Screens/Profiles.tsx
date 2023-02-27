import { Image, Pressable, StatusBar, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Avatar, Badge, Icon } from '@rneui/base';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
// import { Avatar, Badge } from '@rneui/themed';


const s = require("../../../extraFiles/styles")

const Profiles = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // const s = require('../../extra/');

  const data = route.params
  console.log(data);

  return (
    <View style={{ backgroundColor: '#E5E5E5', flex: 1 }}>
      <View style={styles.conatiner}>

        {/* top HEader */}
        <View style={{}}>
          {/* header */}
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable onPress={() => 
              //  navigation.navigate(('DrawerNavigation' as never), ( {screen: "Leaderboard"}as never))

              navigation.goBack()
              }>
                <View style={{}}>
                  <Icon
                    name='arrow-back-outline'
                    type='ionicon'
                    color='#797F8A'
                    containerStyle={{ paddingRight: 10 }}
                    size={30}
                  />
                </View>
              </Pressable>

              <Text style={styles.HeaderText}>Profile</Text>
              <View style={[s.BtnBackground, s.CompShadow]}>
                <Icon
                  name='settings-outline'
                  type='ionicon'
                  color='#517fa4'
                />
              </View>
            </View>
          </View>
          {/* mid icon */}
          <View>
            <View style={styles.mainavatar}>
              <View>
                <Avatar
                  rounded
                  source={require('../../../Images/comman/avatar.png')}
                  size={100}
                />

                <Avatar
                  rounded
                  source={require('../../../Images/comman/edit.png')}
                  size={50}
                  containerStyle={{ position: 'absolute', bottom: -10, right: -10, }}
                />
              </View>
              <View>
                <Text style={{ alignSelf: 'center', fontSize: 32, fontWeight: '400', margin: 10 }}>Linnea</Text>
              </View>
            </View>
          </View>
          {/* 3rd part */}
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <View style={styles.textContainer}>
                <Text style={{ fontSize: 24, alignSelf: 'center' }}>5</Text>
                <Text style={{ fontSize: 15, alignSelf: 'center' }}>badges</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={{ fontSize: 24, alignSelf: 'center' }}>35</Text>
                <Text style={{ fontSize: 15, alignSelf: 'center' }}>Performance</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={{ fontSize: 24, alignSelf: 'center' }}>1</Text>
                <Text style={{ fontSize: 15, alignSelf: 'center' }}>Arrangement</Text>
              </View>

            </View>
          </View>

        </View>


      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* cards container */}
        <View style={{ paddingHorizontal: 20 }}>
          {/* /card 1 */}
          <View>
            <View style={styles.FirstCard}>
              <Image source={require('../../../Images/ProfileScreen/Offerbg.png')}

                style={styles.FirstCardImage} />
              <Text style={styles.FirstCardText}>Premium</Text>
            </View>
            {/* buybtn */}



            <View style={styles.FirstCardButton}>
              <LinearGradient
                // Button Linear Gradient
                colors={['#00AEFF', '#0076FF']}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  alignItems: 'center',
                  paddingHorizontal: 35,
                  paddingVertical: 8,
                  borderRadius: 20,
                  alignContent: 'center',
                  justifyContent: 'center'
                }}>
                <Text style={{
                  backgroundColor: 'transparent',
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#fff',
                }}>Buy</Text>
              </LinearGradient>
            </View>
          </View>
          <Text style={styles.middleText}>BADGES</Text>
          {/* card 2 */}

          <View style={[styles.secondCard, s.shadowOffset]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <View style={{}}>
                <View>
                  <Image
                    source={require('../../../Images/ProfileScreen/copper.png')}
                    style={{ height: 85, width: 85, alignSelf: 'center' }}
                  />
                </View>
                <Text style={{
                  fontSize: 24,
                  fontWeight: '600',
                  color: '242629',
                  padding: 5,
                  alignSelf: 'center'
                }}>7</Text>
                <Text style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: '242629',
                  padding: 5,
                  alignSelf: 'center'
                }}>Bronze</Text>
              </View>
              <View style={{}}>
                <View>
                  <Image
                    source={require('../../../Images/ProfileScreen/silver.png')}
                    style={{ height: 85, width: 85, alignSelf: 'center' }}
                  />
                </View>
                <Text style={{
                  fontSize: 24,
                  fontWeight: '600',
                  color: '242629',
                  padding: 5,
                  alignSelf: 'center'
                }}>4</Text>
                <Text style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: '242629',
                  padding: 5,
                  alignSelf: 'center'
                }}>Silver</Text>
              </View>
              <View style={{}}>
                <View>
                  <Image
                    source={require('../../../Images/ProfileScreen/Gold.png')}
                    style={{ height: 85, width: 85, alignSelf: 'center' }}
                  />
                </View>
                <Text style={{
                  fontSize: 24,
                  fontWeight: '600',
                  color: '242629',
                  padding: 5,
                  alignSelf: 'center'
                }}>3</Text>
                <Text style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: '242629',
                  padding: 5,
                  alignSelf: 'center'
                }}>Gold</Text>
              </View>
            </View>
          </View>
          <Text style={styles.middleText}>STATISTICS</Text>
          {/* card 3 */}
          <View style={styles.thirdCard}>
            <Image 
            source={require('../../../Images/ProfileScreen/FrameGraph.png')}
            style={{height:'100%',width:'100%',alignSelf:'center',borderRadius: 15,}}
            />
          </View>



        </View>

      </ScrollView>
    </View>
  )
}

export default Profiles

const styles = StyleSheet.create({

  conatiner: {
    borderBottomLeftRadius: 30,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 52,
    shadowRadius: 32,
    elevation: 10,
    shadowColor: '#29484C',
    backgroundColor: '#F5F8FF'

  },

  header: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#F5F8FF',
    paddingVertical: 10,
    paddingHorizontal: 20,



  }
  ,
  HeaderText: {
    fontSize: 20,
    fontWeight: '600',
    flex: 1
  },
  mainavatar: {
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
    flex: 1,
  },
  FirstCard: {
    width: '100%',
    height: 180,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
    position: 'relative',
    marginBottom: 5,
    
  },
  FirstCardImage: {
    width: '100%',
    height: 180,
    borderRadius: 20,
  },
  FirstCardText: {
    position: 'absolute',
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
    marginTop: 43,

  },
  FirstCardButton: {
    alignSelf: 'center', position: 'absolute', marginTop: 125,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    elevation: 3,
    shadowColor: '#14484B',
    shadowOpacity: 52,

  },
  middleText: {
    fontSize: 18,
    fontWeight: '500',
    color: '242629',
    padding: 5,
  },
  secondCard: {
    width: '100%',
    height: 180,
    borderRadius: 20,
    backgroundColor: '#F4F7FE',
    justifyContent: 'center',
    marginVertical: 5,

  },
  thirdCard: {
    width: '100%',
    height: 180,
    backgroundColor: '#F2F4FD',
    justifyContent: 'center',
    marginVertical: 5,
    marginBottom: 20,
    borderRadius: 15,
  }


})