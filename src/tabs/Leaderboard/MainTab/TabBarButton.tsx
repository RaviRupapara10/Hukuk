import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const TabBarButton = () => {
    return (
        <View>
            <LinearGradient
                // Button Linear Gradient
                colors={['#73A0F4', '#4A47F5']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                    alignItems: 'center',
                    width: 122,
                    height: 50,
                    borderRadius: 14,
                    alignContent: 'center',
                    justifyContent: 'center'
                }}>
                <Text style={{
                    backgroundColor: 'transparent',
                    fontSize: 18,
                    fontWeight: '600',
                    color: '#fff',
                }}>Log in</Text>
            </LinearGradient>
        </View>
    )
}

export default TabBarButton

const styles = StyleSheet.create({})