import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import React from "react";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Deck from "./src/components/Deck,";

const App = () => {
	const Stack = createStackNavigator();
	const scheme = useColorScheme();
	return (
		<AppearanceProvider>
			<NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
				<Stack.Navigator initialRouteName="Deck">
					<Stack.Screen
						name="Deck"
						component={Deck}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</AppearanceProvider>
	);
};

export default () => {
	return (
		<App
			refs={(navigator) => {
				setnavigator(navigator);
			}}
		/>
	);
};
