import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar } from '@rneui/base';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Group = () => {

  const card = [
    {
      title: 'Alex',
      backgroundClr: '#FFFF',
      points: 700,
      premium:true,
    },
    {
      title: 'Alex',
      backgroundClr: '#FFFF',
      points: 700,
      premium:false,
    },
    
  
  ]

  return (
    <ScrollView style={{
      flex: 1, backgroundColor: '#F5F8FF',
      height: '100%',
    }}>
      <View style={styles.container}>


   

        {card.map((a, i) =>
          <View style={styles.cardContainer}>

            <View style={styles.leftAvatar}>
              <Avatar
                size={64}
                rounded
                // icon={{ name: 'rowing' }}
                containerStyle={{ backgroundColor: '#00a7f7' }}
              />
            </View>

            <View style={styles.MiddleName}>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.headerText}>{a.title}</Text>


              {a.premium?  <View style={{ width: 100, backgroundColor: '#0971FE', borderRadius: 20, justifyContent: 'center',flexDirection:'row' ,padding:3}}>
                <Image
                source={require('../../../Images/comman/Crown.png')}
                style={{height:15,width:15,padding:2,marginHorizontal:3
                ,marginRight:10 }}
                />
                <Text style={styles.subText}>Premium</Text>
              </View>: <></>}


              </View>
            </View>
            <View style={{ justifyContent: 'center', marginRight: 10 }}>
              <View style={{ backgroundColor: '#0971FE', padding: 5, borderRadius: 25, paddingHorizontal: 20 }}>
                <Text style={{color:'#fff'}}>{a.points}</Text>
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

    padding: 10,
    alignSelf: 'center',

  },

  cardContainer: {
    width: windowWidth,
    flexDirection: 'row',
    marginVertical: 5,
    // padding:10,
    // justifyContent: 'space-between'
  },

  leftAvatar: {
    // padding:10,
    marginHorizontal: 5


  },
  MiddleName: {
    // backgroundColor: 'red',
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    paddingVertical: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',

  },
  subText: {
    // alignSelf: 'center',
    // padding: 2,
    fontSize: 12,
    color:'#ffffff'
    // width:'100%'
    // backgroundColor: '#0971FE'
  }
})