import { Image, ScrollView, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import QuizCard from '../../../Componant/QuizCard'

const EventQuiz = () => {

  const data = [
    {
      mainTitle: 'Civil Low',
      ineertitle: [
        {
          title: '3D Design Essential - Cinema 4d'
        },
        {
          title: 'Motion Design Essential-Blender 4.0 '
        },
        {
          title: 'Motion Design Essential-Blender 4.0 '
        }
      ]
    },
    {
      mainTitle: 'Civil Low',
      ineertitle: [{
        title: '3D Design Essential - Cinema 4d'
      },
      {
        title: 'Motion Design Essential-Blender 4.0 '
      },
      {
        title: 'Motion Design Essential-Blender 4.0 '
      }
      ]
    }
  ]


  return (
    <View style={{ flex: 1, backgroundColor: '#f5f8ff' }}>
      <ScrollView>

        {/* <View>
        <View style={styles.containerStyle}>
          <View style={styles.innerContainer}>
            <View style={{

              justifyContent: 'space-between',
              alignContent: 'space-between',
              height:'100%'
            }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: '100%' }}>
                <View style={{}}>
                  <View style={styles.ratingContainer}>
                    <Image
                      style={{ height: 10, width: 10 }}
                      source={require('../../../Images/comman/star.png')} />
                    <Text style={{ paddingHorizontal: 5 }}>4.6</Text>
                  </View>
                </View>

                <View style={{ margin: 10, }}>
                  <CircularProgress
                    value={50}
                    radius={25}
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
              <View style={{ margin: 10 }}>
                <Image source={require('../../../Images/comman/cardBtn.png')} />
              </View>
            </View>

          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>3D Design Essential -
              Cinema 4d</Text>
          </View>
        </View>
      </View> */}


        {/* full compnant */}


        {/* <View style={{paddingVertical:10,paddingHorizontal:20 }}>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10,
          marginBottom: 10
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: '600',
            // paddingVertical:10,

          }}>
            civil law</Text>
          <Text>
            Show All ↓</Text>
        </View>
        <ScrollView horizontal={true}>

          <QuizCard title='3D Design Essential - Cinema 4d' />
          <QuizCard title='Motion Design Essential -
Blender 4.0 ' />
        </ScrollView>
      </View> */}



        {data.map((a, i) =>
          <View key={i} style={{ paddingVertical: 10, paddingHorizontal: 20 }}>

            <View style={{
              flexDirection: 'row',
              alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10,
              marginBottom: 10
            }}>
              <Text style={{
                fontSize: 20,
                fontWeight: '600',
                // paddingVertical:10,

              }}>
                {a.mainTitle}</Text>
              <Text>
                Show All ↓</Text>
            </View>
            <ScrollView horizontal={true}>
              {a.ineertitle.map((a, i) =>
                <QuizCard key={i} title={a.title} />)}

            </ScrollView>
          </View>)}

      </ScrollView>
    </View>
  )
}
export default EventQuiz

const styles = StyleSheet.create({
  containerStyle: {
    height: 240,
    width: 240,
    borderRadius: 20,
    backgroundColor: '#ffffff', margin: 20,
    padding: 10,
    alignContent: 'center',
  },

  innerContainer: {
    height: 150, width: 223, borderRadius: 20, backgroundColor: '#E7EEFB',
  },

  cardText: {
    fontWeight: '500',
    fontSize: 18,

  },
  cardTextContainer: {
    paddingVertical: 20
  },
  ratingContainer: {
    alignContent: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',

    alignItems: 'center',
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 10,
    width: 50,
    justifyContent: 'center',
  },

})