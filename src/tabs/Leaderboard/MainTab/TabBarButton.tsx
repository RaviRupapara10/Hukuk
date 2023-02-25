import { Dimensions, Image, Pressable, StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation, useRoute } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const TabBarButton = (props: any) => {
    const [currentScreenName, setCurrentScreenName] = useState<string>();
    console.log((props as any).navigationState.index);
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {

        setCurrentScreenName(props.tabs[(props as any).navigationState.index].name);

    }, [(props as any).navigationState.index])

    const func = (x: any) => {
        navigation.navigate('DrawerNavigation' as never, { screen: 'Leaderboard', params: { screen: x.name } } as never);
        setCurrentScreenName(x.name);
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center',paddingVertical:10 }}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../../Images/comman/BackIcon.png')}
                            style={{ height: 15, width: 15, marginRight: 30, marginLeft: 10 ,padding:10 ,marginVertical:10}}
                        />
                    </Pressable>

                    <Text style={styles.HeaderText}>LeaderBoard</Text>
                </View>
            </View>





            <View style={{ flexDirection: 'row',marginBottom:10}}>
                {props.tabs.map((x: any, i: number) =>
                    <View style={{ marginHorizontal: 10 }} key={i}>
                        <Pressable onPress={() => func(x)}>
                            <LinearGradient
                                // Button Linear Gradient
                                colors={currentScreenName == x.name ? ['#00AEFF', '#0076FF'] : ['#E7EEFB', '#FFFFFF']}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.btn}>
                                <Text style={{
                                    backgroundColor: 'transparent',
                                    fontSize: 18,
                                    fontWeight: '600',
                                    color: currentScreenName == x.name ? '#fff' : '#000',
                                    padding: 10,
                                }}>{x.tabBarLabel}</Text>
                            </LinearGradient>
                        </Pressable>
                    </View>
                )}
                {/* <View>
                    <Pressable>
                        <LinearGradient
                            // Button Linear Gradient
                            colors={['#00AEFF', '#0076FF']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{
                                alignItems: 'center',
                                borderRadius: 20,
                                alignContent: 'center',
                                justifyContent: 'center'
                            }}>
                            <Text style={{
                                backgroundColor: 'transparent',
                                fontSize: 18,
                                fontWeight: '600',
                                color: '#fff',
                                padding: 10,
                            }}>Single Player</Text>
                        </LinearGradient>
                    </Pressable>
                </View> */}
            </View>

        </View>

    )
}

export default TabBarButton

const styles = StyleSheet.create({

    header: {
        marginTop: StatusBar.currentHeight, backgroundColor:'#F5F8FF',
    }
    ,
    HeaderText: {
        fontSize: 20,
        fontWeight: '600',


    },
    container:{marginBottom:10,
        backgroundColor:'#F5F8FF',
        borderBottomLeftRadius:30,
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0,
        shadowRadius: 5,
        elevation: 5,
    },
    btn:{
        alignItems: 'center',

        borderRadius: 20,
        alignContent: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        // elevation: 10,
    },
})