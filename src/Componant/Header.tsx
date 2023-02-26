import { Dimensions, Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const Header = (props: any) => {
    const navigation = useNavigation();

    // console.log(prop);

    return (
        <View>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable onPress={()=>navigation.goBack()}>
                        <Image
                            source={require('../Images/comman/BackIcon.png')}
                            style={{ height: 20, width: 20, marginRight: 30 ,marginLeft:10}}
                        />
                    </Pressable>

                    <Text style={styles.HeaderText}>{props.headername}</Text>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({

    header: {
        marginTop: StatusBar.currentHeight,  padding:10

    }
    ,
    HeaderText: {
        fontSize: 26,
        fontWeight: '600',


    },
})