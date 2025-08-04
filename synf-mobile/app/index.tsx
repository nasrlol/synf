// HomeScreen.tsx
import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown, FadeInUp, useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";
import { Link } from "expo-router";
import { Button } from "@react-navigation/elements";

const HomeScreen = () => {
	const navigation = useNavigation();

	const opacity = useSharedValue(0);

	const fadeInStyle = useAnimatedStyle(() => ({
		opacity: withTiming(opacity.value, { duration: 800 }),
		transform: [
			{
				translateY: withTiming(opacity.value === 1 ? 0 : 20, { duration: 800 }),
			},
		],
	}));

	useEffect(() => {
		opacity.value = 1;
	}, []);

	return (
		<View style={styles.container}>
			<Animated.Text entering={FadeInDown.delay(100)} style={styles.title}>
				synf
			</Animated.Text>
			<View entering={FadeInUp.delay(500)} style={[styles.buttonContainer, fadeInStyle]}>
				<Link href="/login" style={styles.button}>login</Link>
			</View>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 100,
		paddingHorizontal: 24,
		backgroundColor: "#f2f2f2",
	},
	title: {
		fontSize: 30,
		fontWeight: "800",
		textAlign: "center",
		color: "#222",
	},
	subtitle: {
		fontSize: 18,
		textAlign: "center",
		color: "#555",
		marginVertical: 16,
	},
	buttonContainer: {
		marginTop: 40,
		gap: 16,
	},
	button: {
		backgroundColor: "#2d2d30ff",
    color: "#ffffff",
    textAlign: "center" ,
		paddingVertical: 14,
		paddingHorizontal: 24,
		borderRadius: 12,
		alignItems: "center",
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowRadius: 6,
		elevation: 3,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "600",
	},
});
