import { Dimensions, Pressable, StatusBar, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Avatar, Button, Icon } from '@rneui/base'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChatMassage = () => {
    const s = require("../../../extraFiles/styles")

    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={{ backgroundColor: '#E5E5E5', flex: 1 }}>
            <View style={{ flex: 1, height: windowHeight, }}>


                <View style={styles.Headerconatiner}>


                    {/* header */}
                    <View style={styles.header}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center' }}>
                            <Pressable onPress={() =>
                                //  navigation.navigate(('DrawerNavigation' as never), ( {screen: "Leaderboard"}as never))

                                navigation.goBack()
                            }>
                                <View style={{}}>
                                    <Icon
                                        name='arrow-back-outline'
                                        type='ionicon'
                                        color='#797F8A'
                                        containerStyle={{ paddingRight: 10, justifyContent: 'center', height: 40, }}
                                        size={20}
                                    />
                                </View>
                            </Pressable>
                            <View>
                                <View style={{ height: 40, flexDirection: 'row', alignItems: 'center' }}>
                                    <View>
                                        <Avatar
                                            rounded
                                            size="small"
                                            containerStyle={{}}
                                            source={require('../../../Images/chat/girlavatar.png')}
                                        />
                                    </View>

                                    <View style={{ paddingHorizontal: 10 }}>
                                        <Text style={{
                                            fontSize: 18,
                                            fontWeight: '600',
                                        }}>Fatmegül </Text>
                                        <Text style={{
                                            fontSize: 12,
                                            fontWeight: '500',
                                        }}>online</Text>

                                    </View>
                                </View>
                            </View>

                            <View style={{ height: 40, margin: 5 }}>
                            </View>

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

                {/* chat Contaiber */}
                <ScrollView style={{ flex: 1, }}>

                    <View style={{}}></View>
                </ScrollView>
                {/* bootom type box */}
                <View style={{ alignContent: 'flex-end' }}>
                    <View style={styles.TypeContainer}>
                        <View style={{ alignSelf: 'center' }}>

                            <Avatar
                                size={30}
                                rounded
                                source={require('../../../Images/chat/Smile.png')}

                            />


                        </View>
                        <View style={{ alignSelf: 'center', flex: 1, paddingHorizontal: 10, }}>
                            <TextInput placeholder='Write a message here...'></TextInput>
                        </View>
                        <View style={{
                            alignSelf: 'center', height: 40, width: 40,
                            // borderRadius: 25, backgroundColor: '#0971FE', justifyContent: 'center', alignItems: 'center'
                        }}>




                            <Avatar
                                size={40}
                                rounded
                                icon={{ name: 'paper-plane-outline', type: 'ionicon' }}
                                containerStyle={{ backgroundColor: '#0971FE' }}
                            />
                        </View>


                    </View>
                </View>
            </View>
        </View>
    )
}

export default ChatMassage

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
        // backgroundColor: '#F5F8FF',
        // backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 30,
        justifyContent: 'center'

    }
    ,
    HeaderText: {

        alignContent: 'center',
        fontSize: 20,
        fontWeight: '600',
        flex: 1,
    },


    TypeContainer: {
        flexDirection: 'row',
        height: 72,

        backgroundColor: '#E7EEFB',
        alignSelf: 'center',
        paddingHorizontal: 20,
        width: windowWidth - 40,
        borderRadius: 20,
        // justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 20,

    }
})