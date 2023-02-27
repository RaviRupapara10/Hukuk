import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Badge } from '@rneui/base';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Group = () => {

  const card = [
    {
      title: 'Alex',
      AvatarColor: '#E7EEFB',
      points: 800,
      premium: true,

    },
    {
      title: 'Aaron',
      AvatarColor: '#E7EEFB',
      points: 600,
      // premium: true,
      Badge: true,
    },
    {
      title: 'Coinneach',
      AvatarColor: '#E7EEFB',
      points: 456,
      // premium: true,
    },
    {
      title: 'Devin',
      AvatarColor: '#E7EEFB',
      points: 375,
      // premium: true,
    },
    {
      title: 'Marco',
      AvatarColor: '#E7EEFB',
      points: 590,
      // premium: true,
    },
    {
      title: 'Steffan',
      AvatarColor: '#E7EEFB',
      points: 600,
    },


  ]

  return (
    <ScrollView style={{
      flex: 1, backgroundColor: '#F5F8FF',
      height: '100%',
    }}>
      <View style={styles.container}>




        {card.map((a, i) =>


          
            <View style={styles.cardContainer} key={i} >

              <View style={styles.leftAvatar}>
                <Avatar
                  size={64}
                  rounded
                  // icon={{ name: 'rowing' }}
                  containerStyle={{ backgroundColor: a.AvatarColor }}
                />

                {a.Badge ? <Badge
                  value={<Image source={require('../../../../Images/comman/PremiumBadge.png')}
                    style={{ height: 25, width: 25 }}
                  />}
                  containerStyle={{ position: 'absolute', top: -3, right: -3   }}
                /> : <></>}

              </View>

              <View style={styles.MiddleName}>
                {/* <View style={{ justifyContent: 'center' }}> */}
                <Text style={styles.headerText}>{a.title}</Text>


                {a.premium ? <View style={{ width: 100, backgroundColor: '#0971FE', borderRadius: 20, justifyContent: 'center', flexDirection: 'row', padding: 3 }}>
                  <Image
                    source={require('../../../../Images/comman/Crown.png')}
                    style={{
                      height: 15, width: 15, padding: 2, marginHorizontal: 3
                      , marginRight: 10
                    }}
                  />
                  <Text style={styles.subText}>Premium</Text>
                </View> : <></>}


                {/* </View> */}
              </View>
              <View style={{ justifyContent: 'center', marginRight: 10 }}>
                <View style={{ backgroundColor: a.premium ? '#0971FE' : '#797F8A', padding: 5, borderRadius: 25, paddingHorizontal: 20 }}>
                  <Text style={{ color: '#fff' }}>{a.points}</Text>
                </View>
              </View>

            </View>
        )}
      </View>
    </ScrollView>
  )
}

export default Group

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
    // backgroundColor:'green',
    height: 70,
    justifyContent: 'center',
    alignContent: 'center',

    // justifyContent: 'space-between'
  },

  leftAvatar: {
    // padding:10,
    justifyContent: 'center',
    marginHorizontal: 5,


  },
  MiddleName: {
    // backgroundColor: 'red',
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    paddingVertical: 5,

  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',

  },
  subText: {
    // alignSelf: 'center',
    // padding: 2,
    fontSize: 12,
    color: '#ffffff',
    // width:'100%'
    backgroundColor: '#0971FE'
  }
})