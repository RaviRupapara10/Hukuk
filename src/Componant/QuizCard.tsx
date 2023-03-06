import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import CircularProgress from 'react-native-circular-progress-indicator'

const QuizCard = ( prop :any) => {
    return (
        <View>
            <View style={styles.containerStyle}>
                <View style={styles.innerContainer}>
                    <View style={{

                        justifyContent: 'space-between',
                        alignContent: 'space-between',
                        height: '100%'
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: '100%' }}>
                            <View style={{}}>
                                <View style={styles.ratingContainer}>
                                    <Image
                                        style={{ height: 10, width: 10 }}
                                        source={require('../Images/comman/star.png')} />
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
                            <Image source={require('../Images/comman/cardBtn.png')} />
                        </View>
                    </View>

                </View>
                <View style={styles.cardTextContainer}>
                    <Text style={styles.cardText}>{prop.title}</Text>
                </View>
            </View>
        </View>
    )
}

export default QuizCard

const styles = StyleSheet.create({
    containerStyle: {
        height: 240,
        width: 240,
        borderRadius: 20,
        backgroundColor: '#ffffff', 
        marginRight:20,
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