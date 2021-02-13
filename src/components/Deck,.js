import React, { useRef, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Animated,
	PanResponder,
	Dimensions,
} from "react-native";
import { Card, Button, Image } from "react-native-elements";

const Deck = () => {
	const [index, setIndex] = useState(0);
	const SCREEN_WIDTH = Dimensions.get("window").width;
	const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
	const SWIPE_OUT_DURATION = 250;
	const pan = useRef(new Animated.ValueXY()).current;

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: Animated.event(
			[
				null,
				{
					dx: pan.x,
					dy: pan.y,
				},
			],
			{ useNativeDriver: false }
		),
		onPanResponderRelease: () => {
			const x = Number(JSON.parse(JSON.stringify(pan.x)));
			x > SWIPE_THRESHOLD
				? swipeHelper("right")
				: x < -SWIPE_THRESHOLD
				? swipeHelper("left")
				: Animated.spring(pan, {
						toValue: { x: 0, y: 0 },
						useNativeDriver: false,
				  }).start();
		},
	});

	const swipeHelper = (direction) => {
		const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
		Animated.timing(pan, {
			toValue: { x, y: 0 },
			duration: SWIPE_OUT_DURATION,
			useNativeDriver: false,
		}).start(() => swipeComplete(direction));
	};

	const swipeComplete = (direction) => {
		const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
		pan.setValue({ x: 0, y: 0 });
		setIndex(index + 1);
	};

	const noMoreCards = () => {
		return (
			<Card title="All Done!" style={styles.card}>
				<Image
					style={styles.image}
					source={{
						uri:
							"https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
					}}
				/>
				<Text style={{ marginBottom: 10 }}>There's no more card here!</Text>
				<Button buttonStyle={styles.button} title="Get More" />
			</Card>
		);
	};

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
			{index >= DATA.length ? noMoreCards() : null}
			{DATA.map((item, i) => {
				if (i < index) {
					return null;
				}

				if (i === index) {
					return (
						<Animated.View
							{...panResponder.panHandlers}
							style={[
								pan.getLayout(),
								styles.card,
								{
									transform: [
										{
											rotate: pan.x.interpolate({
												inputRange: [
													-SCREEN_WIDTH * 1.5,
													0,
													SCREEN_WIDTH * 1.5,
												],
												outputRange: ["-120deg", "0deg", "120deg"],
											}),
										},
									],
								},
							]}
							key={item.id}>
							<Card title={item.text}>
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
						</Animated.View>
					);
				}
				return (
					<Animated.View
						key={item.id}
						style={[styles.card, styles.otherCard, { top: 10 * (i - index) }]}>
						<Card title={item.text}>
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
					</Animated.View>
				);
			}).reverse()}
		</View>
	);
};

export default Deck;

const styles = StyleSheet.create({
	otherCard: {
		overflow: "hidden",
	},
	card: {
		marginTop: 10,
		position: "absolute",
		width: Dimensions.get("window").width,
	},
	image: {
		height: 200,
	},
	button: {
		backgroundColor: "brown",
	},
});
