import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const EventsHome = () => {
  const [data, setData] = useState(50)

  return (
    <View style={styles.container}>
      <View style={{}}>
        <View style={{ flexDirection: 'row', position: 'absolute', margin: 20, alignContent: 'space-between', }}>
          <View style={{ justifyContent: 'flex-start' }}>
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
          <View style={{ alignItems: 'flex-end' }}>
            {/* To DO:: Progress bar*/}
          </View>
        </View>

      </View>
    </View>
  )
}

export default EventsHome

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: 'blue',
    width: deviceWidth - 100,
    borderRadius: 20,
    position: 'relative',
  }
}
)