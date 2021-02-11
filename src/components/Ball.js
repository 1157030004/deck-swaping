import React, { useRef } from "react";
import {
	StyleSheet,
	Text,
	View,
	Animated,
	Dimensions,
	Button,
} from "react-native";

const Ball = () => {
	const { width, height } = Dimensions.get("screen");
	const pan = useRef(new Animated.ValueXY(0, 0)).current;

	const down = () => {
		Animated.spring(pan, {
			toValue: { x: 100, y: 80 },
			duration: 500,
			useNativeDriver: false,
		}).start();
	};
	return (
		<Animated.View style={[pan.getLayout, styles.canvas]}>
			<View style={styles.ball}></View>
		</Animated.View>
		/* <Button title="move" onPress={down} /> */
	);
};

export default Ball;

const styles = StyleSheet.create({
	canvas: {
		flex: 1,
	},
	ball: {
		height: 60,
		width: 60,
		borderRadius: 30,
		borderWidth: 30,
		borderColor: "cyan",
	},
});
