import { Dimensions, FlatList, Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useNavigation, useRoute } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeSearch = ({navigation }:any) => {
    const s = require("../../extraFiles/styles")


    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];


    const Data = [
        {
            image: "",
            result: 'Search Result 1',
            premium: true,
            Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            image: "",
            result: 'Search Result 1',
            premium: true,
            Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            image: "",
            result: 'Search Result 1',
            // premium: true,
            Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            image: "",
            result: 'Search Result 1',
            // premium: true,
            Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            image: "",
            result: 'Search Result 1',
            // premium: true,
            Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            image: "",
            result: 'Search Result 1',
            // premium: true,
            Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            image: "",
            result: 'Search Result 1',
            // premium: true,
            Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            image: "",
            result: 'Search Result 1',
            // premium: true,
            Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ]

    // const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={{ backgroundColor: '#F5F8FF', flex: 1 }}>
            <View style={styles.Headerconatiner}>


                {/* header */}
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', }}>
                        <Pressable onPress={() =>
                            //  navigation.navigate(('DrawerNavigation' as never), ( {screen: "Leaderboard"}as never))

                            navigation.goBack()
                        }>
                            <View style={[s.BtnBackground, s.CompShadow]}>
                                <Icon
                                    name='close'
                                    type='ionicon'
                                    color='#242629'
                                />
                            </View>
                        </Pressable>
                        <View style={styles.searchContainer}>
                            <Icon
                                name='search'
                                type='ionicon'
                                color='#242629'
                                containerStyle={{ justifyContent: 'center', paddingHorizontal: 10 }}
                            />
                            <TextInput 
                             autoFocus = {true}
                            style={{ flex: 1 }} placeholder='Criminal law'></TextInput>
                            <Pressable style={{ justifyContent: 'center', paddingHorizontal: 10 }}>
                                <Image source={require('../../Images/HomeScreen/close.png')}
                                />
                            </Pressable>
                        </View>

                        {/* 
                        <View style={{ height: 40, margin: 5 }}>
                        </View> */}

                        {/* <View style={[s.BtnBackground, s.CompShadow]}>
							<Icon
								name='settings-outline'
								type='ionicon'
								color='#517fa4'
							/>
						</View> */}
                    </View>
                </View>
            </View>

            <View>
                <View style={styles.CardlayoutContainer}>


                    <FlatList
                        data={Data}
                        // keyExtractor={item => item.id}
                        renderItem={({ item ,index}) =>
                            <View  key={index} style={styles.Card}>
                                <View  style={{ padding: 10, flexDirection: 'row', }}>


                                    <View>
                                        < Image
                                            source={require('../../Images/comman/avatar.png')}
                                            style={{ height: 66, width: 66, borderRadius: 14, margin: 10 }}
                                        />
                                        {item.premium ?
                                            <View style={{ position: 'absolute', left: 33 }}>
                                                <Image source={require('../../Images/HomeScreen/Premium.png')}
                                                    style={{ height: 25, width: 25 }}
                                                />
                                            </View> : <></>}
                                    </View>
                                    <View
                                        style={{ margin: 10, flex: 1 }}
                                    >
                                        <Text style={{ fontSize: 20, fontWeight: '600' }}>{item.result} </Text>
                                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#797F8A' }}>{item.Text} </Text>
                                    </View>
                                </View>

                            </View>
                        }
                    />
                </View>
            </View>


        </View>
    )
}

export default HomeSearch

const styles = StyleSheet.create({

    Headerconatiner: {
        borderBottomLeftRadius: 30,
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 52,
        shadowRadius: 32,
        elevation: 10,
        shadowColor: '#29484C',
        backgroundColor: '#F5F8FF',
        // paddingBottom:30

    },

    header: {
        marginTop: StatusBar.currentHeight,
     
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 30,

    }
    ,
    HeaderText: {

        alignContent: 'center',
        fontSize: 20,
        fontWeight: '600',
        flex: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        shadowOffset: { width: 0, height: 12 },
        shadowRadius: 16,
        elevation: 5,
        shadowColor: '#14484B',
        shadowOpacity: 52,
        height: 40, width: 40,
        backgroundColor: '#ffffff',

        borderRadius: 15,
        margin: 5,
        flex: 1,

    },
    CardlayoutContainer: {

        alignSelf: 'center',
        marginVertical: 10
    },
    Card: {
        width: windowWidth - 50,
        height: 103,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        marginVertical: 10,
        shadowOffset: { width: 0, height: 12 },
        shadowRadius: 16,
        elevation: 7,
        shadowColor: '#14484B',
        shadowOpacity: 52,
        marginHorizontal: 10,
        alignSelf: 'center'
    }
})