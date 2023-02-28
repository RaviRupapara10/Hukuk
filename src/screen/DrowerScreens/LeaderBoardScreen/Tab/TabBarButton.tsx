import { Dimensions, Image, Pressable, StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from '@rneui/base';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const TabBarButton = (props: any) => {
	const [currentScreenName, setCurrentScreenName] = useState<string>();
	// console.log((props as any).navigationState.index);
	const navigation = useNavigation();
	const route = useRoute();

	useEffect(() => {

		setCurrentScreenName(props.tabs[(props as any).navigationState.index].name);

	}, [(props as any).navigationState.index])

	const func = (x: any) => {
		navigation.navigate('DrawerNavigation' as never, ({ screen: "DrawerScreen", params: { screen: 'Leaderboard', params: { screen: x.name } }} as never));
		setCurrentScreenName(x.name);
	}


	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
					<Pressable onPress={() => navigation.goBack()}>
						<View style={{}}>
							<Icon
								name='arrow-back-outline'
								type='ionicon'
								color='#797F8A'
								containerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }}
								size={20}
							/>
						</View>
					</Pressable>

					<Text style={styles.HeaderText}>LeaderBoard</Text>
					<View style={{ height: 40, margin: 5 }}>
					</View>
				</View>
			</View>





			<View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 10 }}>
				{props.tabs.map((x: any, i: number) =>
					<View style={{ marginHorizontal: 10, margin: 10 }} key={i}>
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

			</View>

		</View>

	)
}

export default TabBarButton

const styles = StyleSheet.create({

	header: {
		marginTop: StatusBar.currentHeight, backgroundColor: '#F5F8FF',
	}
	,
	HeaderText: {
		fontSize: 20,
		fontWeight: '600',


	},
	container: {
		marginBottom: 15,
		backgroundColor: '#F5F8FF',
		borderBottomLeftRadius: 30,
		shadowOffset: { width: 0, height: 12 },
		shadowOpacity: 52,
		shadowRadius: 32,
		elevation: 10,
		shadowColor: '#29484C'
	},
	btn: {
		alignItems: 'center',

		borderRadius: 20,
		alignContent: 'center',
		justifyContent: 'center',
		shadowOffset: { width: 0, height: 12 },
		shadowRadius: 16,
		elevation: 5,
		shadowColor: '#14484B',
		shadowOpacity: 52,
		// elevation: 10,
	},
})