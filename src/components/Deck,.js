import React from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { Card, Button, Image } from "react-native-elements";

const Deck = () => {
	const DATA = [
		{
			id: 1,
			text: "Card #1",
			uri:
				"https://images.unsplash.com/photo-1517137708685-c42f99521535?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZWV0JTIwbWFya2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		},
		{
			id: 2,
			text: "Card #2",
			uri:
				"https://images.unsplash.com/photo-1524042645623-eea64b3c0370?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c3RyZWV0JTIwbWFya2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		},
		{
			id: 3,
			text: "Card #3",
			uri:
				"https://images.unsplash.com/photo-1518978478775-2915324171f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0cmVldCUyMG1hcmtldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		},
		{
			id: 4,
			text: "Card #4",
			uri:
				"https://images.unsplash.com/photo-1524584830732-b69165ddba9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cmVldCUyMG1hcmtldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		},
		{
			id: 5,
			text: "Card #5",
			uri:
				"https://images.unsplash.com/photo-1506917980821-213681597089?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHN0cmVldCUyMG1hcmtldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		},
		{
			id: 6,
			text: "Card #6",
			uri:
				"https://images.unsplash.com/photo-1525294065345-1708669da7b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHN0cmVldCUyMG1hcmtldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		},
		{
			id: 7,
			text: "Card #7",
			uri:
				"https://images.unsplash.com/photo-1568882041008-c0954e91caba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHN0cmVldCUyMG1hcmtldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		},
		{
			id: 8,
			text: "Card #8",
			uri:
				"https://images.unsplash.com/photo-1494795817488-f572f2a30c87?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDR8fHN0cmVldCUyMG1hcmtldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		},
	];

	return (
		<View>
			{DATA.map((item) => {
				return (
					<Card title={item.text} style={styles.card} key={item.id}>
						<Image
							source={{ uri: item.uri }}
							resizeMode="cover"
							style={styles.image}
						/>
						<Text style={{ marginBottom: 10 }}>{item.text}</Text>
						<Button
							buttonStyle={styles.button}
							icon={{ name: "code" }}
							title="View now!"
						/>
					</Card>
				);
			})}
		</View>
	);
};

export default Deck;

const styles = StyleSheet.create({
	image: {
		height: 150,
	},
	button: {
		backgroundColor: "brown",
	},
});
