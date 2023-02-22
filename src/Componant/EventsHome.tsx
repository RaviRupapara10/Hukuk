import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Avatar } from '@rneui/base';
import { LinearGradient } from 'expo-linear-gradient';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const EventsHome = (prop:any) => {

// console.log(prop);


  const [data, setData] = useState(50)

  return (
    <View style={styles.container}>
      
      <LinearGradient
        // Background Linear Gradient
        colors={prop.gradColor}
        style={styles.container}/>

      <View style={styles.incontainer}>
        <View style={styles.topContainer}>
          <View>
            <View><Text style={{ fontSize: 26, fontWeight: '600', color: '#ffffff' }}>civil law
            </Text></View>
            <View >
              <View style={{ flexDirection: 'row', backgroundColor: '#ffffff', padding: 2, borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: 50 }}>
                <Icon
                  size={16}
                  name='star'
                  color={'#FFC107'}
                />
                <Text style={{ paddingHorizontal: 5 }}>4.6</Text>
              </View>
            </View>
          </View>

          {/* progressbar */}

          <View style={{ right: 0 }}>
            <CircularProgress
              value={50}
              radius={40}
              duration={1000}
              progressValueColor={'white'}
              maxValue={100}
              // title={'%'}
              titleColor={'#ffffff'}
              titleStyle={{ fontWeight: 'bold' }}
              activeStrokeColor={'#ffffff'}
              valueSuffix={'%'}
              activeStrokeWidth={7}
              inActiveStrokeWidth={7}
              // inActiveStrokeColor="#C4C4C4"
            />
          </View>
        </View>
        {/* text and photo */}
        <View style={{ marginTop: 60 }}>
          <View style={{}}>
            <Text style=
              {{ fontSize: 16, color: '#ffffff' }}>Students</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              {[1, 2, 3, 4, 5].map((a,i) => <View key={i} style={{ width: 25 }}>
                <Avatar 
                  size={35}
                  rounded
                  source={require('../Images/Drower01/avatar.png')}
                  containerStyle={{ borderColor: '#FFFFFf', borderWidth: 1.5 }}
                />
              </View>)}
              <View>
                <View style={{ }}>
                  <Avatar
                    size={35}
                    rounded
                    containerStyle={{ borderColor: '#FFFFFf', backgroundColor: '#ffffff', borderWidth: 1.5, position: 'relative' }}
                  />
                  <View style={{ position: 'absolute', height: '100%', width: '100%', justifyContent: 'center',  }}><Text style={{ fontSize: 16, fontWeight: '600', alignSelf: 'center' }}>+5</Text></View>
                </View>
              </View>
            </View>
          </View>
        </View>

      </View>
    
    </View>
  )
}

export default EventsHome

const styles = StyleSheet.create({
  container: {
    height: 240,
    // backgroundColor: 'blue',
    width: deviceWidth - 100,
    borderRadius: 20,
    position: 'relative',
  },

  incontainer: {
    position: 'absolute',
    padding: 20,
    width: '100%',
  },
  
  topContainer:{ flexDirection: 'row', justifyContent: 'space-between' },
}
)