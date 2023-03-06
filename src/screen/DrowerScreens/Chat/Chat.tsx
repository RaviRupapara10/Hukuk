import { Dimensions, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Badge, Icon } from '@rneui/base';
import { useNavigation, useRoute } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Chat = () => {
	const s = require("../../../extraFiles/styles")

	const navigation = useNavigation();
	const route = useRoute();

	const card = [
		{
			AvatarColor: '#E7EEFB',
			name: 'Rose Ward',
			time: '4:00 PM',
			chat: 'Sound good to me!',
			active: true,

		},
		{
			AvatarColor: '#E7EEFB',
			name: 'Aaron Smith',
			time: '4:00 PM',
			chat: 'Sound good to me!',
			active: true,

		},
		{
			AvatarColor: '#E7EEFB',
			name: 'Beverly Steven',
			time: '1:00 PM',
			chat: 'How you doing?',
			active: false,


		},
		{
			AvatarColor: '#E7EEFB',
			name: 'Group Chat Name',
			time: '1:00 PM',
			chat: 'How you doing?',
			active: false,


		},
		{
			AvatarColor: '#E7EEFB',
			name: 'harshil',
			time: '1:00 PM',
			chat: 'How you doing?',
			active: false,


		},



	]




	return (
		<View style={{ backgroundColor: '#F5F8FF', flex: 1 }}>

			{/* header */}
			<View style={styles.Headerconatiner}>



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
									containerStyle={{ paddingRight: 10, justifyContent: 'center', height: 40, }}
									size={20}
								/>
							</View>
						</Pressable>

						<Text style={styles.HeaderText}>Chat</Text>


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

			{/* insode Contain */}

			<View style={styles.containtView}>

				{card.map((a: any, i) =>
					<Pressable key={i}
						onPress={() => (navigation as any).push(('ChatMassage' as never), { a } as never)}
					>
						<View style={styles.cardContainer}>

							<View style={styles.leftAvatar}>
								<Avatar
									size={64}
									rounded
									containerStyle={{ backgroundColor: a.AvatarColor }}
								/>

								{a.active ?
									<Badge
										status="success"
										containerStyle={{ position: 'absolute', top: 8, left: 8 }}
									/>
									: <></>
								}



							</View>

							<View style={styles.MiddleName}>
								<Text style={styles.headerText}>{a.name}</Text>
								<Text style={{
									fontSize: 14,
									color: a.active ? '#242629' : '#797F8A',
								}}>{a.chat}</Text>
							</View>
							<View style={{ justifyContent: 'center' }}>
								<View style={{ padding: 5, borderRadius: 25, paddingHorizontal: 20 }}>
									<Text style={{ color: a.active ? '#0971FE' : '#797F8A' }}>{a.time}</Text>
								</View>
							</View>


						</View>
					</Pressable>

				)}
			</View>



		</View>
	)
}

export default Chat

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
	containtView: {
		width: windowWidth,
		paddingHorizontal: 20,
		// backgroundColor: 'violet',
	},
	cardContainer: {
		width: windowWidth,
		flexDirection: 'row',
		marginVertical: 10,
		paddingHorizontal: 10,
		justifyContent: 'center',
		// backgroundColor:'red',
		height: 70,
		alignContent: 'center',
		// justifyContent: 'space-between'
		alignSelf: 'center'
	},

	leftAvatar: {
		// padding:10,
		marginHorizontal: 5,
		justifyContent: 'center',



	},
	MiddleName: {
		// backgroundColor: 'red',
		flex: 1,
		marginHorizontal: 10,
		justifyContent: 'center',
		paddingVertical: 5,
		alignContent: 'center',

	},
	headerText: {
		fontSize: 18,
		fontWeight: '600',

	},



})