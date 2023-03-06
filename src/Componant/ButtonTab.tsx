import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation, useRoute } from '@react-navigation/native';

const ButtonTab = (prop: any) => {
    const navigation = useNavigation();
    const route = useRoute();

    // console.log(prop);


    useLayoutEffect(() => {
        navigation.setOptions = () => {
        // {    tabBarGap:-20}
      }
    }, [])

    return (
        <View>
            <LinearGradient
                // Button Linear Gradient
                colors={
                    // activeColor?
                    (prop.color || '').split('-')
                    //   : ['#E7EEFB', '#FFFFFF']
                }
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.btn}>
                <Text style={{
                    backgroundColor: 'transparent',
                    fontSize: 14,
                    fontWeight: '600',
                    color: prop.focused ?'#fff':'black',

                }}>{prop.children}</Text>
            </LinearGradient>
        </View >
    )
}

export default ButtonTab

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 20,
        alignContent: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 12 },
        shadowRadius: 16,
        elevation: 5,
        shadowColor: '#14484B',
        shadowOpacity: 52,
        paddingVertical: 10,
        // elevation: 10,
    },
})