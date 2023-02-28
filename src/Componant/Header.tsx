import { Dimensions, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useNavigation, useRoute } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = () => {
	const s = require("../../../extraFiles/styles")

	const navigation = useNavigation();
	const route = useRoute();
	return (
		<View style={{ backgroundColor: '#E5E5E5', flex: 1 }}>
			<View style={styles.Headerconatiner}>


				{/* header */}
				<View style={styles.header}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Pressable onPress={() =>
							//  navigation.navigate(('DrawerNavigation' as never), ( {screen: "Leaderboard"}as never))

							navigation.goBack()
						}>
							<View style={{}}>
								<Icon
									name='arrow-back-outline'
									type='ionicon'
									color='#797F8A'
									containerStyle={{ paddingRight: 10,justifyContent:'center',height:40, }}
									size={20}
								/>
							</View>
						</Pressable>

						<Text style={styles.HeaderText}>Profile</Text>


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


		</View>
	)
}

export default Header

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
		backgroundColor: 'red',
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
})