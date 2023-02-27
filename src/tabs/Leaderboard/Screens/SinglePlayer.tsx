import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Badge, Icon } from '@rneui/base';
import { useNavigation, useRoute } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SinglePlayer = () => {

  const navigation = useNavigation();
  const route =useRoute()

const profileOpen = (a:any) => {
  console.log(a);
    { navigation.navigate(('DrawerNavigation'as never), { screen: 'Profiles' }as never),{a}}
  }

  const card = [
    {
      title: 'University group name',
      AvatarColor: '#E7EEFB',
      points: 800,
      premium: true,
      Participants: '1780 Participants',
      Badge: true
    },
    {
      title: 'University group name',
      AvatarColor: '#E7EEFB',
      points: 600,
      Participants: '1780 Participants',

    },
    {
      title: 'University group name',
      AvatarColor: '#E7EEFB',
      points: 600,
      Participants: '1780 Participants',

    },
    {
      title: 'University group name',
      AvatarColor: '#E7EEFB',
      points: 600,
      Participants: '1780 Participants',

    },



  ]

  return (
    <ScrollView style={{
      flex: 1, backgroundColor: '#F5F8FF',
      height: '100%',
    }}>
      <View style={styles.container}>




        {card.map((a, i) =>
          <Pressable
          onPress={()=>profileOpen(a)}
          key={i}
          >
            <View style={styles.cardContainer}>

              <View style={styles.leftAvatar}>
                <Avatar
                  size={64}
                  rounded
                  containerStyle={{ backgroundColor: a.AvatarColor }}
                />

                {a.Badge ? <Badge
                  value={<Image source={require('../../../Images/comman/PremiumBadge.png')}
                    style={{ height: 25, width: 25 }}
                  />}
                  containerStyle={{ position: 'absolute', top: -3, right: -3 }}
                /> : <></>}

              </View>

              <View style={styles.MiddleName}>
                <Text style={styles.headerText}>{a.title}</Text>
                <Text style={styles.subText}>{a.Participants}</Text>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <View style={{ backgroundColor: a.premium ? '#0971FE' : '#797F8A', padding: 5, borderRadius: 25, paddingHorizontal: 20 }}>
                  <Text style={{ color: '#fff' }}>{a.points}</Text>
                </View>
              </View>
              <View style={{ justifyContent: 'center', }}>
                {/* <Image source={require('../../../Images/comman/ArrowRight.png')}
              style={{height:20,
              width:20}}
              /> */}
                <Icon
                  name='chevron-forward-outline'
                  type='ionicon'
                  color='#797F8A'
                />
              </View>

            </View>
          </Pressable>
        )}
      </View>
    </ScrollView>
  )
}

export default SinglePlayer

const styles = StyleSheet.create({

  container: {
    // backgroundColor: 'powdergreen',

    // padding: 20,
    alignSelf: 'center',

  },

  cardContainer: {
    width: windowWidth,
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    // backgroundColor:'red',
    height: 70,
    alignContent: 'center',
    // justifyContent: 'space-between'
  },

  leftAvatar: {
    // padding:10,
    marginHorizontal: 5,
    justifyContent: 'center',



  },
  MiddleName: {
    // backgroundColor: 'red',
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    paddingVertical: 5,
    alignContent: 'center',

  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',

  },
  subText: {
    // alignSelf: 'center',
    // padding: 2,
    fontSize: 14,
    // width:'100%'
    color: '#797F8A'
  }
})